---
title: "地牢生成"
description: "Dream Quest 地牢棋盘、怪物、Boss 和奖励生成规则。"
---


# 地牢生成

这页按实际楼层生成顺序阅读。普通层是第 1-3 层：先切到本层随机流，建棋盘、决定地形、造墙、放玩家，再放职业建筑、普通怪物、奖励、Boss、特殊建筑和起点文本。第 4 层会提前分流到 BuildLastFloor，是另一套最终层逻辑。

<section class="dq-flow-grid">
  <div><strong>普通层</strong><span>第 1 层 8 x 8；第 2、3 层 10 x 10。地形、墙、怪物、奖励和 Boss 都在同一层生成过程中确定。</span></div>
  <div><strong>最终层</strong><span>第 4 层直接清墙、全图可见，并在中心放 Throne 和 FinalBoss，不生成普通怪物、商店、奖励和普通 Boss。</span></div>
  <div><strong>地形</strong><span>普通层从尚未出现的普通地形中均匀抽取；地形会保存到 floorEnvironments，并影响怪物与 Boss 的候选权重。</span></div>
  <div><strong>墙</strong><span>每个格子按洗牌顺序尝试变墙；只有变墙后地图仍连通，才再投 50% 成为墙。</span></div>
  <div><strong>放置</strong><span>普通层的放置顺序会影响后续判断：玩家和酒馆占格后，怪物、奖励、Boss 都只能在未占用格上继续生成。</span></div>
</section>

## 0. 随机入口

<table class="dq-data-table">
  <thead><tr><th>种子 / 状态</th><th>在地牢生成里的用途</th><th>互相影响</th></tr></thead>
  <tbody>
    <tr><td>初始种子</td><td>创建游戏或解析种子串时得到的起点，用来派生每层楼层种子和升级奖励种子。</td><td>改变它会改变整局可复现内容。</td></tr>
    <tr><td>第 1 / 2 / 3 层楼层种子</td><td>BuildBoard(depth) 会按当前层切到对应楼层种子，生成棋盘、墙、地形、怪物、奖励、Boss 和位置。</td><td>每层是独立入口；第 1 层生成不会推进第 2 层楼层种子。</td></tr>
    <tr><td>地牢全局随机</td><td>楼层生成期间大量使用 RandomFloat、RandomRange、RandomNormal 和洗牌；生成后部分地牢行动也继续使用它。</td><td>同一条流上的后续操作会互相推进，例如变形术、寻宝、宝箱、商店重算。</td></tr>
    <tr><td>升级奖励种子</td><td>升级奖励单独保存，不被楼层造墙、怪物和奖励建筑消耗。</td><td>楼层生成消耗再多随机，也不会直接吃掉升级奖励序列。</td></tr>
    <tr><td>floorBoss / floorEnvironments</td><td>保存第 1-3 层已经生成或从存档恢复的 Boss 与地形。</td><td>它们是生成结果状态。若 floorBoss 非空，CreateBoss 直接使用固定 Boss；若 floorEnvironments 不是 NONE，同层直接复用该地形。</td></tr>
    <tr><td>战斗内随机</td><td>起手洗牌、战斗内随机弃牌和部分战斗效果。</td><td>不参与地牢地图生成；详见 <a href="/mechanics/rng-save-load">随机数机制</a>。</td></tr>
  </tbody>
</table>

同一层内部是一条连续流水线：造墙洗牌、50% 造墙判定、怪物等级、怪物放置、奖励名、奖励位置、Boss 选择和 Boss 位置，都会按顺序消耗本层随机流。不同层种子、升级奖励种子和战斗内随机则是分开的入口。

## 1. 普通层总流程

普通层指第 1-3 层。第 4 层在 PopulateDungeon 开头直接进入 BuildLastFloor，跳过下表的普通层流程。

<table class="dq-data-table">
  <thead><tr><th>顺序</th><th>阶段</th><th>生成结果</th><th>后续影响</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Initialize</td><td>创建 Tile[,]、allTiles、每个 Tile 的坐标和棋盘引用。</td><td>之后所有随机选格、连通检查、地形贴图和对象放置都基于这张棋盘。</td></tr>
    <tr><td>2</td><td>地形</td><td>读取或抽取 floorEnvironment。</td><td>决定地板 / 墙体贴图，并作为普通怪物和 Boss 出现权重的环境字段。</td></tr>
    <tr><td>3</td><td>BuildMaze</td><td>逐格尝试变墙，保证剩余可走格始终连通。</td><td>墙会影响后续 RandomUnusedTile、怪物割点、奖励区域和 Boss 位置。</td></tr>
    <tr><td>4</td><td>玩家位置</td><td>RandomUnusedTile 放 PlayerSprite。</td><td>PlayerTile 成为距离、威胁距离、Bard 第 1 层酒馆和起点文本的参考点。</td></tr>
    <tr><td>5</td><td>AddTaverns</td><td>Bard 职业可能放 Tavern。</td><td>酒馆占用格子，后续怪物、奖励和 Boss 不能直接占同一个未移动格。</td></tr>
    <tr><td>6</td><td>AddMonsters</td><td>选择普通怪物位置、生成怪物等级、按地形权重选择怪物种类。</td><td>怪物格会产生威胁，后续 AddRewards 会用这些威胁切分奖励区域。</td></tr>
    <tr><td>7</td><td>AddRewards</td><td>生成奖励名列表，按威胁区域摆放奖励建筑，并在末尾创建普通 Boss。</td><td>奖励和 Boss 都会占格；Boss 死亡后才会产生普通楼梯。</td></tr>
    <tr><td>8</td><td>AddTraps / AddWeirdFeature</td><td>当前 build 的 AddTraps 为空；第 2 层以后可能添加特殊建筑。</td><td>特殊建筑是普通奖励流程之外的额外地图对象。</td></tr>
    <tr><td>9</td><td>LevelStart</td><td>在 PlayerTile 创建楼层起点文本。</td><td>只提供进入楼层的文本提示，不参与墙、怪物或奖励权重。</td></tr>
  </tbody>
</table>

## 2. Initialize：棋盘与 Tile

<table class="dq-data-table">
  <thead><tr><th>项目</th><th>规则</th></tr></thead>
  <tbody>
    <tr><td>第 1 层</td><td>8 x 8，共 64 个 Tile。</td></tr>
    <tr><td>第 2 / 3 层</td><td>10 x 10，共 100 个 Tile。</td></tr>
    <tr><td>第 4 层</td><td>同样按后续层尺寸建盘，但随后 BuildLastFloor 会清墙、全图可见，并改用最终层对象。</td></tr>
    <tr><td>TileAt</td><td>先检查坐标是否在棋盘内；越界返回空，合法坐标返回 board[x, y]。</td></tr>
    <tr><td>allTiles</td><td>Initialize 会把每个 Tile 追加到 allTiles。BuildMaze、AddMonsters 和随机选格都会反复使用这个列表。</td></tr>
  </tbody>
</table>

## 3. 地形：floorEnvironment

普通层使用 Dungeon、Water、Volcano、Forest、Crypt、Mountain 六种真实地形。地形不参与墙数量计算，但会决定地板 / 墙体贴图，并影响普通怪物与普通 Boss 的环境权重。

<section class="dq-callout">
  <strong>地形不是每层都从六种里重新 1/6 抽</strong>
  <p>新生成普通层时，代码会排除 LAST、NONE，以及之前普通层已经抽到的地形，再从剩余地形里均匀抽一个。因此第 1 层是 6 选 1，第 2 层是剩余 5 选 1，第 3 层是剩余 4 选 1。</p>
</section>

<table class="dq-data-table">
  <thead><tr><th>楼层</th><th>抽取规则</th><th>概率</th><th>种子关系</th></tr></thead>
  <tbody>
    <tr><td>第 1 层</td><td>排除 LAST 和 NONE 后，在 6 种普通地形里抽。</td><td>每种普通地形 1/6。</td><td>由第 1 层楼层种子的当前随机流决定。</td></tr>
    <tr><td>第 2 层</td><td>继续排除第 1 层已出现的地形。</td><td>剩余 5 种普通地形各 1/5。</td><td>由第 2 层楼层种子决定，但候选列表会读取第 1 层保存的地形。</td></tr>
    <tr><td>第 3 层</td><td>继续排除第 1、2 层已出现的地形。</td><td>剩余 4 种普通地形各 1/4。</td><td>由第 3 层楼层种子决定，但候选列表会读取前两层保存的地形。</td></tr>
    <tr><td>第 4 层</td><td>不抽普通地形，直接设置为 LAST。</td><td>固定。</td><td>最终层逻辑直接写入，不走普通怪物 / Boss 地形权重。</td></tr>
  </tbody>
</table>

<table class="dq-data-table">
  <thead><tr><th>后台值</th><th>地形</th><th>用途</th></tr></thead>
  <tbody>
    <tr><td>0</td><td>Dungeon</td><td>普通地形；参与普通怪物和普通 Boss 的 Dungeon 权重。</td></tr>
    <tr><td>1</td><td>Water</td><td>普通地形；参与 Water 权重。</td></tr>
    <tr><td>2</td><td>Volcano</td><td>普通地形；参与 Volcano 权重。</td></tr>
    <tr><td>3</td><td>Forest</td><td>普通地形；参与 Forest 权重。</td></tr>
    <tr><td>4</td><td>Crypt</td><td>普通地形；参与 Crypt 权重。</td></tr>
    <tr><td>5</td><td>Mountain</td><td>普通地形；参与 Mountain 权重，也会被 LightEnvironment 识别为明亮环境。</td></tr>
    <tr><td>6</td><td>LAST</td><td>最终层地形。普通层抽地形时会主动排除它。</td></tr>
    <tr><td>7</td><td>NONE</td><td>未指定 / 初始占位。floorEnvironments 初始为 NONE；普通层首次生成时看到 NONE 才会抽真实地形。</td></tr>
  </tbody>
</table>

<table class="dq-data-table dq-terrain-art-table">
  <thead><tr><th>后台值</th><th>地形</th><th>地板 Tile</th><th>墙 Tile</th><th>说明</th></tr></thead>
  <tbody>
<tr>
      <td>0</td>
      <td>Dungeon</td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/DungeonTileFloor__584.png" alt="DungeonTileFloor" loading="lazy">
    <em>DungeonTileFloor</em>
  </span></span></td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/DungeonTileWall__1051.png" alt="DungeonTileWall" loading="lazy">
    <em>DungeonTileWall</em>
  </span></span></td>
      <td>基础地牢地形。</td>
    </tr>
<tr>
      <td>1</td>
      <td>Water</td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/WaterTileFloor__303.png" alt="WaterTileFloor" loading="lazy">
    <em>WaterTileFloor</em>
  </span></span></td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/WaterTileWall__961.png" alt="WaterTileWall" loading="lazy">
    <em>WaterTileWall</em>
  </span><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/WaterTileWall1__661.png" alt="WaterTileWall1" loading="lazy">
    <em>WaterTileWall1</em>
  </span><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/WaterTileWall2__353.png" alt="WaterTileWall2" loading="lazy">
    <em>WaterTileWall2</em>
  </span><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/WaterTileWall3__1019.png" alt="WaterTileWall3" loading="lazy">
    <em>WaterTileWall3</em>
  </span><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/WaterTileWall4__606.png" alt="WaterTileWall4" loading="lazy">
    <em>WaterTileWall4</em>
  </span></span></td>
      <td>水域有多张墙体变体。</td>
    </tr>
<tr>
      <td>2</td>
      <td>Volcano</td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/VolcanoTileFloor__379.png" alt="VolcanoTileFloor" loading="lazy">
    <em>VolcanoTileFloor</em>
  </span></span></td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/VolcanoTileWall__106.png" alt="VolcanoTileWall" loading="lazy">
    <em>VolcanoTileWall</em>
  </span></span></td>
      <td>火山地形。</td>
    </tr>
<tr>
      <td>3</td>
      <td>Forest</td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/ForestTileFloor__548.png" alt="ForestTileFloor" loading="lazy">
    <em>ForestTileFloor</em>
  </span></span></td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/ForestTileWall__372.png" alt="ForestTileWall" loading="lazy">
    <em>ForestTileWall</em>
  </span></span></td>
      <td>森林地形。</td>
    </tr>
<tr>
      <td>4</td>
      <td>Crypt</td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/CryptTileFloor__426.png" alt="CryptTileFloor" loading="lazy">
    <em>CryptTileFloor</em>
  </span></span></td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/CryptTileWall__617.png" alt="CryptTileWall" loading="lazy">
    <em>CryptTileWall</em>
  </span></span></td>
      <td>墓穴地形。</td>
    </tr>
<tr>
      <td>5</td>
      <td>Mountain</td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/MountainTileFloor__169.png" alt="MountainTileFloor" loading="lazy">
    <em>MountainTileFloor</em>
  </span></span></td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/MountainTileWall__457.png" alt="MountainTileWall" loading="lazy">
    <em>MountainTileWall</em>
  </span></span></td>
      <td>山脉地形；LightEnvironment 只识别这个值。</td>
    </tr>
<tr>
      <td>6</td>
      <td>LAST</td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-terrain-swatch">
    <img src="/assets/extracted/textures/by_container/resources/FinalTileFloor__845.png" alt="FinalTileFloor" loading="lazy">
    <em>FinalTileFloor</em>
  </span></span></td>
      <td><span class="dq-terrain-swatch-row"><span class="dq-muted-chip">无墙图</span></span></td>
      <td>最终层地形。第四层会清掉所有墙，因此没有实际墙图。</td>
    </tr>
  </tbody>
</table>

<section class="dq-action-row">
  <a class="dq-button dq-button-secondary" href="/mechanics/terrain-monsters">查看各地形可能出现的生物</a>
</section>

## 4. BuildMaze：墙与连通

BuildMaze 先把 allTiles 洗牌，然后按洗牌后的顺序逐格尝试变墙。每个格子最多尝试一次，成功条件有两层：CanDelete 必须允许这个格子变墙，随后 RandomFloat &lt; 0.5 才真正把 Tile.impassable 设为 true。

<table class="dq-data-table">
  <thead><tr><th>环节</th><th>具体规则</th><th>结果</th></tr></thead>
  <tbody>
    <tr><td>洗牌</td><td>Utility.Shuffle(allTiles) 决定检查顺序。</td><td>越早检查的格子越容易成为墙；越晚检查时，连通约束通常更严格。</td></tr>
    <tr><td>CanDelete</td><td>如果目标格已经是墙，直接拒绝；否则临时把它设为 impassable。</td><td>临时状态只用于测试，不代表最终变墙。</td></tr>
    <tr><td>IsConnected</td><td>统计所有非墙格，从第一个非墙格开始做四向连通搜索，搜索时排除 BlocksMovement 的格子。</td><td>如果搜索到的格子数等于全图非墙格数量，说明删掉这个格子后地图仍是一整块。</td></tr>
    <tr><td>50% 判定</td><td>通过连通检查后，再投 RandomFloat &lt; 0.5。</td><td>只有这一步也通过，格子才永久变成墙。</td></tr>
  </tbody>
</table>

这一步不是寻找一条固定入口到出口路线，而是维护全图可走区连通。斜角接触不算连通；只要某个格子变墙会把地图切成两块，它就不会被删掉。

<table class="dq-data-table">
  <thead><tr><th>楼层</th><th>棋盘</th><th>总格子</th><th>常见墙数</th><th>样本范围</th><th>样本均值</th><th>剩余可走格</th></tr></thead>
  <tbody>
<tr><td>第 1 层</td><td>8 x 8</td><td>64</td><td>约 24-27</td><td>20-30</td><td>25.1</td><td>34-44</td></tr>
<tr><td>第 2 层</td><td>10 x 10</td><td>100</td><td>约 38-42</td><td>34-47</td><td>39.9</td><td>53-66</td></tr>
<tr><td>第 3 层</td><td>10 x 10</td><td>100</td><td>约 38-42</td><td>34-47</td><td>39.9</td><td>53-66</td></tr>
  </tbody>
</table>

这里的墙数是样本体感范围，不是硬上限。真正墙数由楼层种子、洗牌顺序、连通检查和每次 50% 判定共同决定。

## 5. PlayerSprite 与 Bard 酒馆

造墙结束后，普通层会用 RandomUnusedTile 选择一个未占用格创建 PlayerSprite。此后 PlayerTile 会成为本层的关键参考点：怪物距离排序、威胁距离、Bard 第 1 层酒馆位置和 LevelStart 都会围绕它计算。

<table class="dq-data-table">
  <thead><tr><th>对象</th><th>生成规则</th><th>后续影响</th></tr></thead>
  <tbody>
    <tr><td>PlayerSprite</td><td>从可删除且未占用的空格中随机选一个。</td><td>该格不再是 unused；后续对象不会直接占用玩家所在格。</td></tr>
    <tr><td>Bard Tavern</td><td>只有职业是 Bard 时 AddTaverns 才继续。第 1 层放在 PlayerTile 的随机未使用邻格；第 2、3 层放在随机未使用格。</td><td>Tavern 是 DungeonFeature，会占用格子，并参与后续 Tile.IsUnused 判断。</td></tr>
    <tr><td>Musical Champion</td><td>若第 1 层且 WINBARD2 属性存在，会额外在随机未使用格创建第二个 Tavern。</td><td>Bard 开局可能拥有更多酒馆入口。</td></tr>
  </tbody>
</table>

## 6. AddMonsters：普通怪物

AddMonsters 分两件事：先选怪物格，再生成怪物等级和怪物种类。位置选择不是平均撒点，而是先尽量占关键通道，再按格子形状概率补怪，最后不足时回填。

<table class="dq-data-table">
  <thead><tr><th>阶段</th><th>具体规则</th><th>结果</th></tr></thead>
  <tbody>
    <tr><td>数量</td><td>第 1 层固定 6 只；第 2、3 层为 RandomRange(9, 11)。</td><td>决定 selected_tiles 的目标数量。</td></tr>
    <tr><td>割点预选</td><td>FindBestCutVertex 最多成功 5 次。每次成功后，把该格加入 selected_tiles 并临时设为 impassable。</td><td>优先把怪物放在封住后会切开 0 威胁通路的关键位置。</td></tr>
    <tr><td>邻格临时阻挡</td><td>对已选位置的未阻挡邻格临时设为 impassable。</td><td>降低怪物直接贴在一起的概率。</td></tr>
    <tr><td>随机放怪</td><td>洗牌 allTiles，依次检查 Tile.IsUnused 且 RandomFloat &lt; Tile.MonsterPercent。</td><td>格子形状会影响被接受概率。</td></tr>
    <tr><td>回填</td><td>如果随机阶段没放够，从同一批洗牌 allTiles 里继续找 unused 且未选中的格子补足。</td><td>尽量达到本层目标怪物数量。</td></tr>
    <tr><td>释放临时墙</td><td>清除邻格和已选怪物格上的临时 impassable。</td><td>这些格子只是选点时临时阻挡，最终怪物格仍然可作为战斗入口。</td></tr>
    <tr><td>距离排序</td><td>对 selected_tiles 计算 GetStartDistances，并按距离从近到远排序。</td><td>等级列表按排序后顺序落位，所以远处通常更容易对应高等级。</td></tr>
  </tbody>
</table>

<table class="dq-data-table">
  <thead><tr><th>楼层</th><th>怪物数量</th><th>基础等级</th><th>等级总和目标</th></tr></thead>
  <tbody>
<tr><td>1</td><td>6</td><td>1、2、3</td><td>13</td></tr>
<tr><td>2</td><td>RandomRange(9, 11)</td><td>4、5、6</td><td>54</td></tr>
<tr><td>3</td><td>RandomRange(9, 11)</td><td>7、8、9</td><td>70</td></tr>
  </tbody>
</table>

<section class="dq-mechanic-list">
  <p>等级列表先按基础等级生成权重：每个基础等级得到 RandomFloat + 0.5，归一化后乘以怪物数量，再截断为各等级数量。</p>
  <p>每只怪物随后有等级波动：10% 概率 -1，15% 概率 +1，5% 概率 +2；前三个波动额外偏低，分别带 -0.15、-0.10、-0.05 修正。</p>
  <p>等级会被限制在当前层基础范围内，并且最高不超过 10。如果总等级低于目标值，会随机挑还能提升的怪物继续 +1，直到达到目标。</p>
</section>

<table class="dq-data-table">
  <thead><tr><th>方法</th><th>具体作用</th><th>影响到的结果</th></tr></thead>
  <tbody>
    <tr><td>FindDeletableSquares</td><td>从全图格子里找“临时变墙后地图仍保持连通”的格子。它内部会用 CanDelete / IsConnected 检查。</td><td>给割点检测提供候选；这里不是直接生成新墙。</td></tr>
    <tr><td>Tile.IsUnused</td><td>过滤已经是墙、或已经放了 DungeonFeature 的格子。怪物、建筑、玩家等都会让格子不再是 unused。</td><td>放怪和放奖励只会在真正空格上继续尝试。</td></tr>
    <tr><td>Tile.CanBeACut</td><td>局部形状预筛。它看上下左右四个正交邻格，以及四个转角连接缺口；至少 2 个正交邻格、且缺口数大于 1，才可能成为切点。</td><td>快速排除不可能切开通路的格子，后续仍要经过 IsUnused 和区域数量检查。</td></tr>
    <tr><td>FindCutVertexInfos</td><td>先记录当前 GetThreatComponents 的区域数量；再临时把候选格设为 impassable，重新计算区域数量；如果数量增加，就记录这个候选格和切开后的区域列表。</td><td>确认“封住这个格会把 0 威胁通路切成更多块”。</td></tr>
    <tr><td>GetThreatComponents</td><td>把 impassable 格、以及 Tile.GetThreat 不为 0 的格子都当作屏障，只对剩下的 0 威胁可走格做四向 flood fill。</td><td>得到“被墙和怪物隔开的安全空地区域”，不是普通全图连通块。</td></tr>
    <tr><td>GetStartDistances / TileDistanceSort</td><td>从玩家起点算普通距离，并按距离给已经选中的怪物格排序。</td><td>影响怪物等级和位置的配对。</td></tr>
  </tbody>
</table>

<section class="dq-callout">
  <strong>格子形状的判定</strong>
  <span>Tile.MonsterPercent 只看当前格上下左右四个邻格是否可走：邻格不存在或 impassable=true 都算不开口。记左右开口数为 H、上下开口数为 V，总开口数为 H+V；下表就是代码里的分类。AddMonsters 临时封住已选怪物格和相邻格时，也会改变后续格子的形状判定。</span>
</section>

<table class="dq-data-table">
  <thead><tr><th>格子形状</th><th>判定</th><th>怪物尝试放置概率</th></tr></thead>
  <tbody>
<tr><td>直线双向通道</td><td>左右都可走且上下不可走，或上下都可走且左右不可走。也就是总开口数 = 2，且两个开口在同一轴线上。</td><td>30%</td></tr>
<tr><td>四向交叉</td><td>上下左右 4 个邻格都存在且都不是 impassable。</td><td>15%</td></tr>
<tr><td>拐角 / T 字路口</td><td>总开口数 = 2 或 3，但不满足直线双向通道。2 个开口且互相垂直时是拐角；3 个开口时是 T 字路口。</td><td>10%</td></tr>
<tr><td>死路 / 边缘 / 孤立格</td><td>总开口数不是 2、3、4 的其他情况，主要是 0 或 1 个可走邻格。</td><td>5%</td></tr>
  </tbody>
</table>

### 普通怪物类型权重

怪物类型选择使用 MonsterData 的地形权重。候选必须同时满足：普通怪物类型、当前等级落在 min/max 区间内、当前地形权重大于 0。最终概率不是表中权重本身，而是该怪物权重除以当前候选池总权重。普通怪物还会受 seen 计数影响：本层已经生成过的内部名会被临时降权。

<details open>
  <summary>普通怪物权重</summary>
  <table class="dq-data-table">
  <thead><tr><th>怪物</th><th>等级</th><th>地牢</th><th>水域</th><th>火山</th><th>森林</th><th>墓穴</th><th>山脉</th></tr></thead>
  <tbody>
<tr>
  <td><a href="/monsters/akami-shaman">Akami Shaman</a></td>
  <td>1-4</td>
  <td>0</td><td>10</td><td>0</td><td>5</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/disciple-of-chaos">Disciple of Chaos</a></td>
  <td>1-4</td>
  <td>3</td><td>0</td><td>10</td><td>0</td><td>3</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/giant-spider">Giant Spider</a></td>
  <td>1-4</td>
  <td>0</td><td>5</td><td>0</td><td>5</td><td>5</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/goblin">Goblin</a></td>
  <td>1-4</td>
  <td>10</td><td>0</td><td>5</td><td>0</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/griffon">Griffon</a></td>
  <td>1-4</td>
  <td>0</td><td>0</td><td>0</td><td>5</td><td>0</td><td>10</td>
</tr>
<tr>
  <td><a href="/monsters/kobold">Kobold</a></td>
  <td>1-4</td>
  <td>10</td><td>0</td><td>5</td><td>0</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/mage">Mage</a></td>
  <td>1-10</td>
  <td>2</td><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td>
</tr>
<tr>
  <td><a href="/monsters/ooze">Ooze</a></td>
  <td>1-4</td>
  <td>0</td><td>5</td><td>5</td><td>0</td><td>5</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/orc">Orc</a></td>
  <td>1-4</td>
  <td>10</td><td>0</td><td>5</td><td>0</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/piranha">Piranha</a></td>
  <td>1-4</td>
  <td>0</td><td>10</td><td>0</td><td>10</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/pixie">Pixie</a></td>
  <td>1-4</td>
  <td>0</td><td>5</td><td>0</td><td>10</td><td>0</td><td>5</td>
</tr>
<tr>
  <td><a href="/monsters/priest">Priest</a></td>
  <td>1-10</td>
  <td>2</td><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td>
</tr>
<tr>
  <td><a href="/monsters/skeleton">Skeleton</a></td>
  <td>1-4</td>
  <td>5</td><td>0</td><td>0</td><td>0</td><td>10</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/thief">Thief</a></td>
  <td>1-10</td>
  <td>2</td><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td>
</tr>
<tr>
  <td><a href="/monsters/ussuri-tracker">Ussuri Tracker</a></td>
  <td>1-4</td>
  <td>0</td><td>0</td><td>0</td><td>10</td><td>0</td><td>5</td>
</tr>
<tr>
  <td><a href="/monsters/vampire-bat">Vampire Bat</a></td>
  <td>1-4</td>
  <td>5</td><td>0</td><td>0</td><td>0</td><td>10</td><td>5</td>
</tr>
<tr>
  <td><a href="/monsters/warrior">Warrior</a></td>
  <td>1-10</td>
  <td>2</td><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td>
</tr>
<tr>
  <td><a href="/monsters/wyvern">Wyvern</a></td>
  <td>1-4</td>
  <td>0</td><td>0</td><td>0</td><td>10</td><td>0</td><td>5</td>
</tr>
<tr>
  <td><a href="/monsters/zombie">Zombie</a></td>
  <td>1-4</td>
  <td>5</td><td>0</td><td>0</td><td>0</td><td>10</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/goblin-hoarder">Goblin Hoarder</a></td>
  <td>3-6</td>
  <td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/akami-muckcaller">Akami Muckcaller</a></td>
  <td>4-7</td>
  <td>0</td><td>10</td><td>0</td><td>5</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/akami-stormcaller">Akami Stormcaller</a></td>
  <td>4-7</td>
  <td>0</td><td>10</td><td>0</td><td>5</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/brownie">Brownie</a></td>
  <td>4-7</td>
  <td>0</td><td>5</td><td>0</td><td>10</td><td>0</td><td>5</td>
</tr>
<tr>
  <td><a href="/monsters/clone">Clone</a></td>
  <td>4-7</td>
  <td>5</td><td>0</td><td>5</td><td>0</td><td>5</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/faerie-rogue">Faerie Rogue</a></td>
  <td>4-7</td>
  <td>0</td><td>5</td><td>0</td><td>10</td><td>0</td><td>5</td>
</tr>
<tr>
  <td><a href="/monsters/ghoul">Ghoul</a></td>
  <td>4-7</td>
  <td>5</td><td>0</td><td>0</td><td>0</td><td>10</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/goblin-mechanist">Goblin Mechanist</a></td>
  <td>4-7</td>
  <td>10</td><td>0</td><td>5</td><td>0</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/harpy">Harpy</a></td>
  <td>4-7</td>
  <td>0</td><td>0</td><td>0</td><td>3</td><td>0</td><td>10</td>
</tr>
<tr>
  <td><a href="/monsters/medusa">Medusa</a></td>
  <td>4-7</td>
  <td>5</td><td>0</td><td>0</td><td>5</td><td>5</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/siren">Siren</a></td>
  <td>4-7</td>
  <td>0</td><td>10</td><td>0</td><td>5</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/stone-golem">Stone Golem</a></td>
  <td>4-7</td>
  <td>5</td><td>0</td><td>10</td><td>0</td><td>0</td><td>10</td>
</tr>
<tr>
  <td><a href="/monsters/troll">Troll</a></td>
  <td>4-7</td>
  <td>5</td><td>0</td><td>5</td><td>0</td><td>0</td><td>10</td>
</tr>
<tr>
  <td><a href="/monsters/ussuri-hunter">Ussuri Hunter</a></td>
  <td>4-7</td>
  <td>0</td><td>0</td><td>0</td><td>10</td><td>0</td><td>5</td>
</tr>
<tr>
  <td><a href="/monsters/air-elemental">Air Elemental</a></td>
  <td>5-10</td>
  <td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>10</td>
</tr>
<tr>
  <td><a href="/monsters/banshee">Banshee</a></td>
  <td>5-7</td>
  <td>0</td><td>5</td><td>0</td><td>0</td><td>10</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/earth-elemental">Earth Elemental</a></td>
  <td>5-10</td>
  <td>0</td><td>0</td><td>0</td><td>10</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/fire-elemental">Fire Elemental</a></td>
  <td>5-10</td>
  <td>0</td><td>0</td><td>10</td><td>0</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/ghost">Ghost</a></td>
  <td>5-10</td>
  <td>0</td><td>5</td><td>0</td><td>0</td><td>10</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/mimic-monster">Mimic</a></td>
  <td>5-10</td>
  <td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/ussuri-trickster">Ussuri Ambusher</a></td>
  <td>5-7</td>
  <td>0</td><td>0</td><td>0</td><td>10</td><td>0</td><td>5</td>
</tr>
<tr>
  <td><a href="/monsters/water-elemental">Water Elemental</a></td>
  <td>5-10</td>
  <td>0</td><td>10</td><td>0</td><td>0</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/wisp">Wisp</a></td>
  <td>5-7</td>
  <td>0</td><td>5</td><td>0</td><td>10</td><td>0</td><td>10</td>
</tr>
<tr>
  <td><a href="/monsters/wraith">Wraith</a></td>
  <td>5-7</td>
  <td>5</td><td>0</td><td>5</td><td>0</td><td>10</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/demon">Demon</a></td>
  <td>7-10</td>
  <td>10</td><td>0</td><td>5</td><td>0</td><td>5</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/efreet">Efreet</a></td>
  <td>7-10</td>
  <td>0</td><td>0</td><td>10</td><td>0</td><td>0</td><td>10</td>
</tr>
<tr>
  <td><a href="/monsters/hag">Hag</a></td>
  <td>7-10</td>
  <td>0</td><td>10</td><td>0</td><td>10</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/hand-of-glory">Hand of Glory</a></td>
  <td>7-10</td>
  <td>0</td><td>5</td><td>0</td><td>0</td><td>10</td><td>5</td>
</tr>
<tr>
  <td><a href="/monsters/red-dragon">Red Dragon</a></td>
  <td>7-10</td>
  <td>3</td><td>0</td><td>10</td><td>0</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/revenant">Revenant</a></td>
  <td>7-10</td>
  <td>5</td><td>0</td><td>3</td><td>0</td><td>10</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/sphinx">Sphinx</a></td>
  <td>7-10</td>
  <td>5</td><td>0</td><td>0</td><td>5</td><td>0</td><td>10</td>
</tr>
<tr>
  <td><a href="/monsters/storm-giant">Storm Giant</a></td>
  <td>7-10</td>
  <td>0</td><td>0</td><td>10</td><td>0</td><td>0</td><td>10</td>
</tr>
<tr>
  <td><a href="/monsters/treant">Treant</a></td>
  <td>7-10</td>
  <td>0</td><td>5</td><td>0</td><td>10</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/white-dragon">White Dragon</a></td>
  <td>7-10</td>
  <td>3</td><td>10</td><td>0</td><td>0</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/yellow-dragon">Yellow Dragon</a></td>
  <td>7-10</td>
  <td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>10</td>
</tr>
<tr>
  <td><a href="/monsters/black-dragon">Shadow Dragon</a></td>
  <td>8-10</td>
  <td>3</td><td>0</td><td>0</td><td>10</td><td>10</td><td>0</td>
</tr>
  </tbody>
</table>
</details>

## 7. AddRewards：奖励、建筑与普通 Boss

AddRewards 发生在普通怪物之后。此时怪物已经占格并产生威胁，因此奖励摆放不是只看空格，而是先把地图切成威胁区域，再把奖励分配到这些区域里。

<table class="dq-data-table">
  <thead><tr><th>阶段</th><th>规则</th></tr></thead>
  <tbody>
    <tr><td>基础奖励</td><td>每层先加入 3 个 Shop。</td></tr>
    <tr><td>治疗分支</td><td>先投 1 次 RandomFloat。若大于 0.5：加入 1 个 HealingPool，再加入 depth + RandomRange(1, 2) 个 HealthPack；否则加入 depth * 2 + RandomRange(2, 4) 个 HealthPack。</td></tr>
    <tr><td>服务建筑</td><td>修道院 / Monastery 33.3%；铁匠 / Blacksmith 33.4%；果昔小屋 / Smoothie Shack 33.3%</td></tr>
    <tr><td>额外随机奖励</td><td>Game.RandomRange(2, 4) 次 GenerateRewardName。</td></tr>
    <tr><td>成就 / 难度补充</td><td>DRAGON1 每层加 TreasureChest；STEPS1 每层加 HealthPack；Kitten 加 HealingPool 和 TreasureChest；Grizzly Bear 加 HealthPack。</td></tr>
    <tr><td>摆放逻辑</td><td>奖励名列表会先洗牌，再按“威胁组件”分配。威胁高的连通区域排在前面，但每次被选中后权重会衰减，所以奖励不会全部堆在同一片区域。</td></tr>
  </tbody>
</table>

### 本阶段可能创建的对象

<section class="dq-feature-grid dq-dungeon-entity-grid">
<a class="dq-feature-tile" href="/buildings/shop">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/Shop__966.png" alt="商店" loading="lazy"></span>
  <span>
    <strong>商店</strong>
    <small>Shop · 经济</small>
    <em>每层奖励列表固定先加入 3 个；随机奖励名也可额外生成。</em>
  </span>
</a>
<a class="dq-feature-tile" href="/buildings/treasure-chest">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/TreasureChest__467.png" alt="宝箱" loading="lazy"></span>
  <span>
    <strong>宝箱</strong>
    <small>Treasure Chest · 奖励</small>
    <em>随机奖励名最高权重，打开后生成卡牌和可能的金币。</em>
  </span>
</a>
<a class="dq-feature-tile" href="/buildings/health-pack">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/HealthPack__931.png" alt="治疗包" loading="lazy"></span>
  <span>
    <strong>治疗包</strong>
    <small>Health Pack · 回复</small>
    <em>治疗分支和随机奖励名都可能生成，治疗量随楼层增加。</em>
  </span>
</a>
<a class="dq-feature-tile" href="/buildings/healing-pool">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/HealingPool__702.png" alt="治疗池" loading="lazy"></span>
  <span>
    <strong>治疗池</strong>
    <small>Healing Pool · 回复</small>
    <em>治疗分支、随机奖励名和低难度补偿都可能生成。</em>
  </span>
</a>
<a class="dq-feature-tile" href="/buildings/blacksmith">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/Blacksmith__785.png" alt="铁匠" loading="lazy"></span>
  <span>
    <strong>铁匠</strong>
    <small>Blacksmith · 强化</small>
    <em>服务奖励三选一或随机奖励名生成，用于升级牌。</em>
  </span>
</a>
<a class="dq-feature-tile" href="/buildings/monastery">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/Monastery__583.png" alt="修道院" loading="lazy"></span>
  <span>
    <strong>修道院</strong>
    <small>Monastery · 净化</small>
    <em>服务奖励三选一或随机奖励名生成，用于删牌。</em>
  </span>
</a>
<a class="dq-feature-tile" href="/buildings/smoothie-shack">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/SmoothieShack__181.png" alt="果昔小屋" loading="lazy"></span>
  <span>
    <strong>果昔小屋</strong>
    <small>Smoothie Shack · 奖励</small>
    <em>服务奖励三选一或随机奖励名生成。</em>
  </span>
</a>
<a class="dq-feature-tile" href="/buildings/mimic-chest">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/MimicMonster__105.png" alt="拟态宝箱" loading="lazy"></span>
  <span>
    <strong>拟态宝箱</strong>
    <small>Mimic Chest · 遭遇</small>
    <em>第 2 层以后随机奖励名可生成，打开后变为 Mimic。</em>
  </span>
</a>
<a class="dq-feature-tile" href="/buildings/goblin-hoarder">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/GoblinHoarder__73.png" alt="地精囤积者" loading="lazy"></span>
  <span>
    <strong>地精囤积者</strong>
    <small>Goblin Hoarder · 遭遇</small>
    <em>奖励名抽中后直接创建的携金怪物遭遇，会用防守牌争取逃走。</em>
  </span>
</a>
</section>

<table class="dq-data-table">
  <thead><tr><th>区域方法</th><th>具体作用</th><th>结果</th></tr></thead>
  <tbody>
    <tr><td>GetToPlayerThreats</td><td>从玩家位置出发生成威胁距离表；移动到相邻格时会加上该格 Tile.GetThreat。</td><td>越需要跨过高等级怪物才能到达的区域，威胁距离越高。</td></tr>
    <tr><td>Tile.GetThreat</td><td>汇总格子上 DungeonFeature 的 Threat；普通 DungeonFeature 默认 0，Monster.Threat 返回怪物等级。</td><td>怪物格既会阻断 0 威胁区域，也会提高威胁距离。</td></tr>
    <tr><td>GetThreatComponents</td><td>排除墙和非 0 威胁格，只把剩余 0 威胁空地做四向 flood fill。</td><td>得到 AddRewards 使用的安全空地区域列表。</td></tr>
    <tr><td>ThreatComponent</td><td>保存区域格子列表、区域威胁距离、可用空格 openSquares 和权重。</td><td>奖励会按这些组件分配，而不是直接全图随机撒点。</td></tr>
    <tr><td>ThreatComponent.Pick</td><td>区域被选中后 openSquares 减 1，权重从 1 递减到 0.5、0.15、0.05，之后再被选中会基本耗尽；可用空格不足时也会直接耗尽。</td><td>避免奖励全部堆在同一个区域。</td></tr>
  </tbody>
</table>

### 奖励名列表

GenerateRewards 先生成奖励名列表，AddRewards 再洗牌这个列表并逐个放置。每个奖励实际创建时会调用 GenerateRewardByName；其中 TreasureChest、MimicChest、Shop、Monastery、Blacksmith、SmoothieShack 等会进入各自建筑逻辑。

<section class="dq-callout">
  <strong>GoblinHoarder 是奖励名里的怪物遭遇</strong>
  <p>GenerateRewardName 抽到 GoblinHoarder 时，地图上创建的是 Goblin Hoarder 怪物；它不是可打开建筑，而是怪物遭遇。它携带较多金币，并会用 Cower、Hide 等防守牌争取逃走。</p>
</section>

<table class="dq-data-table">
  <thead><tr><th>楼层组</th><th>奖励名</th><th>概率</th></tr></thead>
  <tbody>
<tr><td>第 1 层</td><td>宝箱 / Treasure Chest</td><td>40%</td></tr>
<tr><td>第 1 层</td><td>治疗包 / Health Pack</td><td>15%</td></tr>
<tr><td>第 1 层</td><td>商店 / Shop</td><td>15%</td></tr>
<tr><td>第 1 层</td><td>地精囤积者 / Goblin Hoarder</td><td>10%</td></tr>
<tr><td>第 1 层</td><td>铁匠 / Blacksmith</td><td>5%</td></tr>
<tr><td>第 1 层</td><td>治疗池 / Healing Pool</td><td>5%</td></tr>
<tr><td>第 1 层</td><td>修道院 / Monastery</td><td>5%</td></tr>
<tr><td>第 1 层</td><td>果昔小屋 / Smoothie Shack</td><td>5%</td></tr>
<tr><td>第 2 层以后</td><td>宝箱 / Treasure Chest</td><td>40%</td></tr>
<tr><td>第 2 层以后</td><td>治疗包 / Health Pack</td><td>15%</td></tr>
<tr><td>第 2 层以后</td><td>商店 / Shop</td><td>15%</td></tr>
<tr><td>第 2 层以后</td><td>铁匠 / Blacksmith</td><td>5%</td></tr>
<tr><td>第 2 层以后</td><td>地精囤积者 / Goblin Hoarder</td><td>5%</td></tr>
<tr><td>第 2 层以后</td><td>治疗池 / Healing Pool</td><td>5%</td></tr>
<tr><td>第 2 层以后</td><td>拟态宝箱 / Mimic Chest</td><td>5%</td></tr>
<tr><td>第 2 层以后</td><td>修道院 / Monastery</td><td>5%</td></tr>
<tr><td>第 2 层以后</td><td>果昔小屋 / Smoothie Shack</td><td>5%</td></tr>
  </tbody>
</table>

### 金币预算

<section class="dq-mechanic-list">
  <p>AddRewards 会先用 TotalGoldTarget 计算本层总金币目标，再除以洗牌后的奖励数量得到平均值。</p>
  <p>奖励放置时使用 multiplier 调整金币预算：初始为 1 + 奖励数量 x 0.025，每放一个奖励后减少 0.05。</p>
  <p>每个奖励传入的 goldTarget 是 int(平均值 x 当前 multiplier)。这会让前面的奖励预算略高，后面的奖励预算逐步下降。</p>
</section>

### 普通 Boss

Boss 是 AddRewards 的末尾步骤，不是单独在怪物阶段生成。

<section class="dq-mechanic-list">
  <p>Boss 基础等级：第 1 层 4 级，第 2 层 7 级，第 3 层 10 级。</p>
  <p>如果 floorBoss 指定了固定内部名，就直接使用；否则 MonsterFinder.ChooseBoss 会按环境权重选择，并排除之前楼层已经出现过的 Boss。</p>
  <p>Boss 位置优先从已排序 ThreatComponent 里找 CanDelete 候选格；如果选中的 Boss 格已有建筑，会先把原建筑移动到随机未使用格，再创建 Boss。</p>
  <p>如果没有合适的组件候选，会扫描全图非墙且 CanDelete 的格子，最后才退回 RandomUnusedTile。</p>
  <p>如果生成的是 Lich，会临时阻塞 Boss 格，在玩家连通区域额外放置 Lich Hunter。</p>
</section>

<section class="dq-feature-grid dq-dungeon-entity-grid">
<a class="dq-feature-tile" href="/monsters/lich">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/Lich__1030.png" alt="巫妖" loading="lazy"></span>
  <span>
    <strong>巫妖</strong>
    <small>7-10 级 · Boss</small>
    <em>普通 Boss 选择到 Lich 时，会触发伴随的 Lich Hunter 放置逻辑。</em>
  </span>
</a>
<a class="dq-feature-tile" href="/buildings/lich-hunter">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/LichHunter__1071.png" alt="巫妖猎手" loading="lazy"></span>
  <span>
    <strong>巫妖猎手</strong>
    <small>Lich Hunter · 遭遇</small>
    <em>Lich Boss 生成后额外创建在玩家连通区域，不来自普通奖励名列表。</em>
  </span>
</a>
</section>

<details>
  <summary>Boss 权重</summary>
  <table class="dq-data-table">
  <thead><tr><th>怪物</th><th>等级</th><th>地牢</th><th>水域</th><th>火山</th><th>森林</th><th>墓穴</th><th>山脉</th></tr></thead>
  <tbody>
<tr>
  <td><a href="/monsters/akami-ascendent">Akami Ascendant</a></td>
  <td>4-7</td>
  <td>0</td><td>10</td><td>0</td><td>5</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/cumulo-nimbus">Cumulo Nimbus</a></td>
  <td>4-7</td>
  <td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>10</td>
</tr>
<tr>
  <td><a href="/monsters/gelatinous-cube">Gelatinous Cube</a></td>
  <td>4-7</td>
  <td>10</td><td>3</td><td>0</td><td>0</td><td>3</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/genie">Genie</a></td>
  <td>4-7</td>
  <td>0</td><td>3</td><td>5</td><td>0</td><td>0</td><td>10</td>
</tr>
<tr>
  <td><a href="/monsters/giant-shark">Giant Shark</a></td>
  <td>4-10</td>
  <td>0</td><td>10</td><td>0</td><td>0</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/goblin-king">Goblin King</a></td>
  <td>4-7</td>
  <td>10</td><td>0</td><td>5</td><td>0</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/magmadon">Magmadon</a></td>
  <td>4-10</td>
  <td>0</td><td>0</td><td>10</td><td>0</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/mime">Mime</a></td>
  <td>4-7</td>
  <td>2</td><td>2</td><td>2</td><td>2</td><td>2</td><td>2</td>
</tr>
<tr>
  <td><a href="/monsters/unicorn">Unicorn</a></td>
  <td>4-7</td>
  <td>0</td><td>0</td><td>0</td><td>10</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/ussuri-war-queen">Ussuri War Queen</a></td>
  <td>4-7</td>
  <td>0</td><td>0</td><td>0</td><td>10</td><td>0</td><td>5</td>
</tr>
<tr>
  <td><a href="/monsters/vampire">Vampire</a></td>
  <td>4-7</td>
  <td>3</td><td>0</td><td>0</td><td>0</td><td>10</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/chromatic-demon">Chromatic Demon</a></td>
  <td>7-10</td>
  <td>0</td><td>5</td><td>5</td><td>5</td><td>0</td><td>5</td>
</tr>
<tr>
  <td><a href="/monsters/hydra">Hydra</a></td>
  <td>7-10</td>
  <td>0</td><td>5</td><td>0</td><td>5</td><td>5</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/ice-queen">Ice Queen</a></td>
  <td>7-10</td>
  <td>0</td><td>5</td><td>0</td><td>10</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/giant-squid">Kraken</a></td>
  <td>7-10</td>
  <td>0</td><td>10</td><td>0</td><td>5</td><td>0</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/lich">Lich</a></td>
  <td>7-10</td>
  <td>3</td><td>0</td><td>0</td><td>0</td><td>10</td><td>0</td>
</tr>
<tr>
  <td><a href="/monsters/phoenix">Phoenix</a></td>
  <td>7-10</td>
  <td>5</td><td>0</td><td>10</td><td>0</td><td>0</td><td>10</td>
</tr>
<tr>
  <td><a href="/monsters/titan">Titan</a></td>
  <td>7-10</td>
  <td>5</td><td>0</td><td>5</td><td>0</td><td>0</td><td>10</td>
</tr>
  </tbody>
</table>
</details>

## 8. AddTraps、特殊建筑和出口

<table class="dq-data-table">
  <thead><tr><th>环节</th><th>规则</th><th>玩家实际看到的结果</th></tr></thead>
  <tbody>
    <tr><td>AddTraps</td><td>当前 build 中是空方法。</td><td>普通层不会在这里额外生成陷阱。</td></tr>
    <tr><td>AddWeirdFeature</td><td>第 2 层以后才进入特殊建筑逻辑；不是页面上 3 类均分。随机数小于 0.70 时生成祭坛，再从 6 种祭坛均匀选 1 个；0.70 到 0.85 是 MushroomPatch；0.85 以上是 Brainsucker。</td><td>这些建筑独立于普通奖励名列表，放在随机未使用格。</td></tr>
    <tr><td>LevelStart</td><td>最后在 PlayerTile 创建 LevelStart。</td><td>提供楼层开场文本，不参与地图连通、怪物、奖励或 Boss 选择。</td></tr>
    <tr><td>普通楼梯</td><td>普通层初始生成时不预放 Stair。普通 Boss 被摧毁时，Monster.Destroy 会在 Boss 所在 Tile 创建 Stair。</td><td>楼梯位置等于普通 Boss 格。</td></tr>
  </tbody>
</table>

### 特殊建筑图

<section class="dq-feature-grid dq-dungeon-entity-grid">
<a class="dq-feature-tile" href="/buildings/altar">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/AltarToAston__291.png" alt="祭坛" loading="lazy"></span>
  <span>
    <strong>祭坛</strong>
    <small>Altar · 事件</small>
    <em>特殊建筑分支合计 70%；命中后 6 种祭坛均匀选择，每种约 11.67%。</em>
  </span>
</a>
<a class="dq-feature-tile" href="/buildings/mushroom-patch">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/MushroomPatch__377.png" alt="蘑菇丛" loading="lazy"></span>
  <span>
    <strong>蘑菇丛</strong>
    <small>Mushroom Patch · 事件</small>
    <em>特殊建筑分支 15%；完成后复制自己选择的牌。</em>
  </span>
</a>
<a class="dq-feature-tile" href="/buildings/brainsucker">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/Brainsucker__485.png" alt="吸脑者事件" loading="lazy"></span>
  <span>
    <strong>吸脑者事件</strong>
    <small>Brainsucker · 事件</small>
    <em>特殊建筑分支 15%；按偏好结算交出的牌。</em>
  </span>
</a>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/buildings">查看地牢建筑图鉴</a>
  <a class="dq-button dq-button-secondary" href="/mechanics/rewards-and-shops">查看奖励与商店</a>
</section>

## 9. BuildLastFloor：第四层

第四层不是“第 3 层再加难度”。PopulateDungeon 发现 depth == 4 时会直接调用 BuildLastFloor，不再执行 BuildMaze、AddTaverns、AddMonsters、AddRewards、普通 Boss、AddTraps 和 AddWeirdFeature。

<table class="dq-data-table">
  <thead><tr><th>阶段</th><th>规则</th><th>结果</th></tr></thead>
  <tbody>
    <tr><td>地形</td><td>environment 固定为 LAST，贴图使用 FinalTileFloor。</td><td>不使用普通地形权重。</td></tr>
    <tr><td>墙和可见性</td><td>遍历全部 Tile，把 impassable 清为 false，并把 visible 设为 true。</td><td>第四层没有迷宫墙，也不需要探索迷雾。</td></tr>
    <tr><td>中心点</td><td>TileAt(5, 5) 是固定中心。</td><td>BuildLastFloor 在这里创建 Throne 和 FinalBoss。</td></tr>
    <tr><td>玩家位置</td><td>PlayerSprite 放到随机未使用格。</td><td>LevelStart 仍创建在玩家当前格。</td></tr>
    <tr><td>最终结算</td><td>第四层用 Throne / Claim the Throne 作为最终交互。</td><td>不生成普通向下楼梯。</td></tr>
  </tbody>
</table>

<section class="dq-feature-grid dq-dungeon-entity-grid">
<span class="dq-feature-tile">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/Throne__646.png" alt="Throne" loading="lazy"></span>
  <span>
    <strong>Throne</strong>
    <small>最终层交互对象</small>
    <em>BuildLastFloor 在中心格创建；用于最终结算入口。</em>
  </span>
</span>
<a class="dq-feature-tile" href="/mechanics/lord-of-the-dream">
  <span class="dq-feature-art"><img src="/assets/extracted/textures/by_container/resources/FinalBoss__1052.png" alt="梦境之主" loading="lazy"></span>
  <span>
    <strong>梦境之主</strong>
    <small>Lord of the Dream</small>
    <em>BuildLastFloor 在中心格创建的最终 Boss。</em>
  </span>
</a>
</section>

<section class="dq-mechanic-list">
  <p><a href="/mechanics/lord-of-the-dream">Lord of the Dream</a> 使用 FinalBoss 类，不在普通 MonsterData 怪物权重表里。</p>
  <p>最终战会生成三组 BossAttr。它们控制最终 Boss 的核心规则，例如法令、贡品、选择、额外回合、抗性、毒、装备和卡组补强。</p>
  <p>Portent 的 FinalBossText 会把当前 BossAttr 转成玩家可见提示；Polymorph / Wild Shape 命中 FinalBoss 特殊分支时，会重新生成这些属性。</p>
</section>

<section class="dq-action-row">
  <a class="dq-button" href="/mechanics/lord-of-the-dream">查看 Lord 机制详解</a>
  <a class="dq-button dq-button-secondary" href="/monsters/lord-of-the-dream">查看怪物图鉴条目</a>
</section>

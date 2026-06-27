import DefaultTheme from "vitepress/theme";
import { inject } from "@vercel/analytics";
import "./custom.css";

const MONSTER_SNAPSHOT_TABLE_PATH = "/assets/data/monster-level-snapshots-incremental.html";

function monsterSnapshotUrl(anchor = "") {
  const query = window.location.search || "";
  return `${MONSTER_SNAPSHOT_TABLE_PATH}${query}${anchor}`;
}

function refreshMonsterSnapshotLinks() {
  const frame = document.querySelector<HTMLIFrameElement>("[data-monster-snapshot-frame]");
  if (frame && frame.dataset.snapshotQueryApplied !== window.location.search) {
    frame.src = monsterSnapshotUrl();
    frame.dataset.snapshotQueryApplied = window.location.search;
  }

  const openLink = document.querySelector<HTMLAnchorElement>("[data-monster-snapshot-open]");
  if (openLink) {
    openLink.href = monsterSnapshotUrl();
  }

  for (const link of document.querySelectorAll<HTMLAnchorElement>("[data-monster-snapshot-target]")) {
    const target = link.dataset.monsterSnapshotTarget;
    if (!target) continue;
    link.href = monsterSnapshotUrl(`#${target}`);
    link.target = "monster-snapshot-frame";
  }
}

function installMonsterSnapshotJumps() {
  if (typeof window === "undefined") return;

  window.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const link = target.closest<HTMLAnchorElement>("[data-monster-snapshot-target]");
    if (!link) return;

    const anchor = link.dataset.monsterSnapshotTarget;
    const frame = document.querySelector<HTMLIFrameElement>("[data-monster-snapshot-frame]");
    const frameShell = document.getElementById("monster-snapshot-frame");
    if (!anchor || !frame) return;

    event.preventDefault();
    frame.src = monsterSnapshotUrl(`#${anchor}`);
    frameShell?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const scheduleRefresh = () => window.setTimeout(refreshMonsterSnapshotLinks, 0);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleRefresh, { once: true });
  } else {
    scheduleRefresh();
  }
  window.addEventListener("popstate", scheduleRefresh);
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }: { router?: { onAfterRouteChanged?: () => void } }) {
    if (
      typeof window !== "undefined" &&
      window.location.hostname.endsWith(".vercel.app")
    ) {
      inject();
    }
    installMonsterSnapshotJumps();
    if (router) {
      router.onAfterRouteChanged = () => {
        if (typeof window === "undefined") return;
        window.setTimeout(refreshMonsterSnapshotLinks, 0);
      };
    }
  }
};

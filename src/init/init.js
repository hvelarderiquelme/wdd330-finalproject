window.addEventListener("pageshow", (e) => {
  if (e.persisted) {
    const modal = document.getElementById("team-modal");
    if (modal) {
      modal.classList.add("hidden");
    }
  }
});

import { initPartials } from "./initPartials.js";
import { initNews } from "./initNews.js";
import { initTeams } from "./initTeams.js";
import { initTeamDetails } from "./initTeamDetails.js";
import { initConnectPage } from "./initConnectPage.js";
import { initTable } from "./initTable.js";
import { loadTemplate } from "../scripts/loadTemplate.js";

export async function init() {
  await initPartials();

  const params = new URLSearchParams(window.location.search);
  const view = params.get("view");

  switch (view) {
    case "teams":
      await loadTemplate("/templates/teams.html");
      await initTeams();
      break;

    case "team":
      await loadTemplate("/templates/team-details.html")
      await initTeamDetails();
      //await initSquad();
      break;
    
    case "table":
      await loadTemplate("/templates/tables.html")
      await initTable();
      //await initSquad();
      break;

    case "connect":
      await loadTemplate("/templates/connect.html")
      initConnectPage();
      break;

    default:
      // Home page
      await loadTemplate("/templates/home.html");
      await initNews();
      break;
  }
}

init();

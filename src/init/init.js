window.addEventListener("pageshow", (e) => {
  if (e.persisted) {
    const modal = document.getElementById("team-modal");
    if (modal) {
      modal.classList.add("hidden");
    }
  }
});

import { initPartials } from "/src/init/initPartials.js";
import { initNews } from "/src/init/initNews.js";
import { initTeams } from "/src/init/initTeams.js";
import { initTeamDetails } from "/src/init/initTeamDetails.js";
import { initConnectPage } from "/src/init/initConnectPage.js";
import { initTable } from "/src/init/initTable.js";
import { loadTemplate } from "/src/loadTemplate.js";

export async function init() {
  await initPartials();

  const params = new URLSearchParams(window.location.search);
  const view = params.get("view");

  switch (view) {
    case "teams":
      await loadTemplate("/src/templates/teams.html");
      await initTeams();
      break;

    case "team":
      await loadTemplate("/src/templates/team-details.html")
      await initTeamDetails();
      //await initSquad();
      break;
    
    case "table":
      await loadTemplate("/src/templates/tables.html")
      await initTable();
      //await initSquad();
      break;

    case "connect":
      await loadTemplate("/src/templates/connect.html")
      initConnectPage();
      break;

    default:
      // Home page
      await loadTemplate("/src/templates/home.html");
      await initNews();
      break;
  }
}

init();

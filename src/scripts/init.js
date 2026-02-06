import { initPartials } from "/src/scripts/initPartials.js";
import { initNews } from "/src/scripts/initNews.js";
import { initTeams } from "/src/scripts/initTeams.js";
import { initTeamDetails } from "/src/scripts/initTeamDetails.js";
//import { initSquad } from "/src/scripts/initSquad.js";
// import { initConnect } from "/src/scripts/initConnect.js";
import { loadTemplate } from "/src/scripts/loadTemplate.js";

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

    case "connect":
      initConnect();
      break;

    default:
      // Home page
      await loadTemplate("/templates/home.html");
      await initNews();
      break;
  }
}

init();



// import { initPartials } from "/src/scripts/initPartials.js";
// import { initNews } from "/src/scripts/news.js";

// //console.log("init.js running");
// export async function init() {
//     await initPartials();
//     await initNews();

// }

// init();

// const params = new URLSearchParams(window.location.search);
// const view = params.get("view");

// switch (view) {
//   case "teams":
//     initTeams();
//     break;
//   case "table":
//     initTable();
//     break;
//   case "connect":
//     initConnect();
//     break;
//   default:
//     initHome();
// }

import { fetchTeams } from "./apis.js";
import { renderTeams } from "./teams.js";
import { initTeamModal } from "./modal.js";

const PREMIER_LEAGUE_ID = 39;
const CURRENT_SEASON = 2024;

async function init() {
    
    try{
        const teams = await fetchTeams(PREMIER_LEAGUE_ID,CURRENT_SEASON);
        //console.log(teams);
        renderTeams(teams);
        //console.log("modal exists?",!!document.getElementById("team-modal"));
        initTeamModal();
    }catch (error) {
        console.error("Error loading teams: ", error);
    }
    
}

init();
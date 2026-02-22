import { fetchTeams } from "/src/init/apis.js";
import { renderTeams } from "/src/render/renderTeams.js";
import { initTeamModal } from "/src/init/initTeamModal.js";

const PREMIER_LEAGUE_ID = 39;
const CURRENT_SEASON = 2024;

export async function initTeams() {
    
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


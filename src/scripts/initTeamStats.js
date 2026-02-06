import { fetchTeamStats } from "./apis.js";
import { renderTeamStats } from "./renderTeamStats.js"

const params = new URLSearchParams(window.location.search);
const teamId = params.get("team");
//console.log(teamId);

export async function initTeamStats(teamId) {
        
        if(!teamId){
            console.error("no team ID provided");
            return
        }
    
        try{
            const teamStats = await fetchTeamStats(teamId);
            //console.log("squad",squad);
            renderTeamStats(teamStats);
        }catch(error){
            console.error("Failed to load the team statistics info information:",error);
        }
        
    }
    
    initTeamStats();
    

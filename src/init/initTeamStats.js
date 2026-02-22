import { fetchTeamStats } from "/src/init/apis.js";
import { renderTeamStats } from "/src/render/renderTeamStats.js"

export async function initTeamStats() {
    const params = new URLSearchParams(window.location.search);
    const teamId = params.get("id");
    //console.log(teamId);
        
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

    

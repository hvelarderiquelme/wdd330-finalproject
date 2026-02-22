import { fetchSquad } from "/src/init/apis.js";
import { renderSquad } from "/src/render/renderSquad.js";
import { initTeamStats } from "/src/init/initTeamStats.js";

//console.log(teamId);
export async function initSquad() {
const params = new URLSearchParams(window.location.search);
const teamId = params.get("id");    
    
    if(!teamId){
        console.error("no team ID provided");
        return
    }

    try{
        const squad = await fetchSquad(teamId);
        //console.log("squad",squad);
        renderSquad(squad);
        await initTeamStats();
    }catch(error){
        console.error("Failed to load the squad information:",error);
    }
    
}


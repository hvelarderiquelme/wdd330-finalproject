import { fetchTeamById } from "/src/init/apis.js";
import { renderTeamInfo } from "/src/render/renderTeamInfo.js";
import { initSquad } from "/src/init/initSquad.js";

//console.log("params teamId= ",teamId);
export async function initTeamDetails() {
const params = new URLSearchParams(window.location.search);
const teamId = params.get("id");
    
if(!teamId){
        console.error("no team ID provided");
        return
    }
    try{
        const teamData = await fetchTeamById(teamId);
        //console.log("teamData",teamData);
        renderTeamInfo(teamData);
        await initSquad();
        
    }catch(error){
        console.error("Failed to load the team data:",error);
    }
    
}







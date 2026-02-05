import { fetchTeamById } from "./apis.js";
import { renderTeamInfo } from "./TeamInfo.js";

const params = new URLSearchParams(window.location.search);
const teamId = params.get("team");

//console.log("params teamId= ",teamId);
async function init() {
    if(!teamId){
        console.error("no team ID provided");
        return
    }
    try{
        const teamData = await fetchTeamById(teamId);
        //console.log("teamData",teamData);
        renderTeamInfo(teamData);
    }catch(error){
        console.error("Failed to load the team data:",error);
    }
    
}

init();



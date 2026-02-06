import { fetchSquad } from "./apis.js";
import { renderSquad } from "./renderSquad.js";


const params = new URLSearchParams(window.location.search);
const teamId = params.get("team");
//console.log(teamId);

async function initSquad() {
    
    if(!teamId){
        console.error("no team ID provided");
        return
    }

    try{
        const squad = await fetchSquad(teamId);
        //console.log("squad",squad);
        renderSquad(squad);
    }catch(error){
        console.error("Failed to load the squad information:",error);
    }
    
}

initSquad();
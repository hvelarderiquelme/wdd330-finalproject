import {fetchTable} from "/src/scripts/apis.js"
import {renderTable} from "/src/scripts/renderTable.js"

const PREMIER_LEAGUE_ID = 39;
const SEASON = 2024
export async function initTable() {
    
    try{
        const table = await fetchTable(PREMIER_LEAGUE_ID,SEASON);
        renderTable(table);
    }catch (error){
        console.error("Unable to fetch the table");
    }

    
}
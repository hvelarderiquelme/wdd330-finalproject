import { USE_REAL_API } from "./config.js";


const API_FOOTBALL_KEY = "10b77d84322cfebe7b2e39b93d5e71ae";
const API_FOOTBALL_BASE_URL = "https://v3.football.api-sports.io";
//const API_NEWS_KEY = "8392875616ea461980cce98e14fe73a8";
//const API_NEWS_BASE_URL = "https://newsapi.org/v2/everything?q=premier+league&apiKey";
const API_SPORTSRC_BASE_URL = "https://api.sportsrc.org/?data=matches&category=football";
const headers = {
  "x-apisports-key": API_FOOTBALL_KEY,
  "Accept": "application/json"
};

//Fetch teams + season(could also work to choose a league)
//In this case we are only focusing on the EPL
export async function fetchTeams(leagueId, season){
  //console.log(USE_REAL_API);
  if(!USE_REAL_API){
    //using mock data to save quota, after retreiving true data once. For developing purposes only
    //My API has a limit of 100 request per day
    const response = await fetch("/mocks/data.json");
    const data = await response.json();
    //console.log("I am using: ", data);
    return data.response;
  }else{
  
    const url = `${API_FOOTBALL_BASE_URL}/teams?league=${leagueId}&season=${season}`;
    //console.log(url);
    const response = await fetch(url,{
      method: "GET",
      headers: headers
    });
    
    const data = await response.json();
    if(!data){
      console.log("ERROR");
    }  
    //console.log(data);
    return data.response;
  }
}

//mock data, remember to change to a dinamic API call
export async function fetchTeamById(teamId) {
  //console.log("from modal:", teamId)
  if(!USE_REAL_API){
    //using mock data to save quota, after retreiving true data once. For developing purposes only
    //My API has a limit of 100 request per day
    const response = await fetch("/mocks/teamInfo.json");
    const data = await response.json();
    return data.response[0];
  }  

    const url = `${API_FOOTBALL_BASE_URL}/teams?id=${teamId}`;
    //console.log(url);
    const response = await fetch(url,{
      method: "GET",
      headers: headers
    });

   const data = await response.json();
    if(!data){
      console.log("ERROR");
    }  
    //console.log(data);
    return data.response[0]; 
  
}

//************************NEWS API************************/
export async function fetchNews() {
if(!USE_REAL_API){
    //using mock data to save quota, after retreiving true data once. For developing purposes only
    //My API has a limit of 100 request per day
    const response = await fetch("/mocks/news.json");
    const data = await response.json();
    //console.log("Mock files");
    return data.articles;
  } 

  const url = API_SPORTSRC_BASE_URL;
    //console.log(url);
    const response = await fetch(url);
    
   const data = await response.json();
    if(!data){
      console.log("ERROR");
    }  
    //console.log("datra.articles",data.articles);
    return data.articles; 

  
}

// export async function fetchNews() {
//   if (!USE_REAL_API) {
//     const response = await fetch("/mocks/news.json");
//     const data = await response.json();
//     return data.articles;
//   }

//   const url = `${API_NEWS_BASE_URL}=${API_NEWS_KEY}`;

//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(`HTTP Error: ${response.status}`);
//   }

//   const data = await response.json();

//   if (!data.articles) {
//     throw new Error("Articles not found in response");
//   }

//   return data.articles;
// }



//**********************Feth Squad Info**************************** */
export async function fetchSquad(teamId) {
  if(!USE_REAL_API){
    //using mock data to save quota, after retreiving true data once. For developing purposes only
    //My API has a limit of 100 request per day
    const response = await fetch("/mocks/players.json");
    const data = await response.json();
    //console.log(data.response[0].players);
    return data.response[0].players;
  } 
  
  const url = `${API_FOOTBALL_BASE_URL}/players/squads?team=${teamId}`;
  console.log(url);
    const response = await fetch(url,{
      method: "GET",
      headers: headers
    });

   const data = await response.json();
    if(!data){
      console.log("ERROR");
    }  
    //console.log(data);
    return data.response[0].players; 

}

//********************fetch team statistics*************************** */
export async function fetchTeamStats(teamId) {
  if(!USE_REAL_API){
    //using mock data to save quota, after retreiving true data once. For developing purposes only
    //My API has a limit of 100 request per day
    const response = await fetch("/mocks/teamStatistics.json");
    const data = await response.json();
    //console.log(data.response);
    return data.response;
  } 
  
  const url = `${API_FOOTBALL_BASE_URL}/teams/statistics?team=${teamId}&league=39&season=2024`;
  //console.log(url);
    const response = await fetch(url,{
      method: "GET",
      headers: headers
    });

   const data = await response.json();
    if(!data){
      console.log("ERROR");
    }  
    //console.log(data);
    return data.response; 

}

/**************************fetch table standings***************************/
export async function fetchTable(leagueId, season) {
  if(!USE_REAL_API){
    //using mock data to save quota, after retreiving true data once. For developing purposes only
    //My API has a limit of 100 request per day
    const response = await fetch("/mocks/table.json");
    const data = await response.json();
    //console.log(data.response);
    return data.response[0].league.standings[0];
  } 
  
  const url = `${API_FOOTBALL_BASE_URL}/standings?league=${leagueId}&season=${season}`;
  //console.log(url);
    const response = await fetch(url,{
      method: "GET",
      headers: headers
    });

   const data = await response.json();
    if(!data){
      console.log("ERROR");
    }  
    //console.log(data);
    return data.response[0].league.standings[0];
  }

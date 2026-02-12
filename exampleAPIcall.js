// Replace with your API key
//const apiKey = "10b77d84322cfebe7b2e39b93d5e71ae";

// Example: Get leagues
 //const apiUrl = "https://v3.football.api-sports.io/teams?id=50";
 //const apiUrl = `https://newsapi.org/v2/everything?q=Premier+League+OR+EPL+soccer&sortBy=publishedAt&language=en&apiKey=8392875616ea461980cce98e14fe73a8`;
 //const apiUrl = 'https://v3.football.api-sports.io/standings?league=39&season=2024';
 //const apiUrl = "https://newsapi.org/v2/everything?q=premier+league&apiKey=8392875616ea461980cce98e14fe73a8";
//  const headers = {
//    "x-apisports-key": apiKey,
//    "Accept": "application/json"
//  };

fetch(apiUrl, { 
   method: "GET"//, 
   //headers: headers 
  })
  .then(resp => {
    if (!resp.ok) throw new Error("API error " + resp.status);
    return resp.json();
  })
  .then(data => {
    //console.log(data);
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
  })
  .catch(err => {
    document.getElementById("output").textContent = "Error: " + err.message;
  });

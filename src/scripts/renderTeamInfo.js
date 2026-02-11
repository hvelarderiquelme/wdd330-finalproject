export function renderTeamInfo(team){
    //console.log("team=",team);
    const teamOverview = document.getElementById("team-overview");

    teamOverview.innerHTML = `<div id="team-name-and-logo">
                                <h1>${team.team.name}</h1>
                                <div class="logo-image">
                                    <img src="${team.team.logo}" alt="${team.team.name} logo">
                                </div>    
                              </div>
                              <div id="team-details" class="team-details">  
                                <div class="venue-image">
                                    <img src="${team.venue.image}" alt="${team.venue.name} stadium">  
                                </div>
                                <div class="venue-info">
                                    <p>Location: ${team.venue.city}, ${team.team.country}.</p>
                                    <p>Founded in: ${team.team.founded}.</p>
                                    <p>Stadium: ${team.venue.name}.</p>
                                    <p>Capacity: ${team.venue.capacity} spectators.</p>
                                    <p>Surface: ${team.venue.surface}.</p>
                                </div>
                              </div>
                             `;
    document.getElementById("back-btn").addEventListener("click", () =>{
        history.back();
    });                        

                             
}


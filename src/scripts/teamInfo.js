export function renderTeamInfo(team){
    //console.log("team=",team);
    const teamOverview = document.getElementById("team-overview");

    teamOverview.innerHTML = `<h1><strong>${team.team.name}</strong></h1>
                             <img src="${team.team.logo}" alt="${team.team.name} logo">
                             <p><strong>Location: ${team.venue.city}, ${team.team.country}</strong></p>
                             <p><strong>Founded in: ${team.team.founded}</strong></p>
                             <p><strong>Stadium: ${team.venue.name}</strong></p>
                             <p><strong>Capacity: ${team.venue.capacity} spectators</strong></p>
                             <p><strong>Surface: ${team.venue.surface}</strong></p>
                             <img src="${team.venue.image}" alt="${team.venue.name} stadium">
                             `;
}
export function renderTeams(teams) {
    //console.log(teams);
    const container = document.getElementById("teams-container");
    container.innerHTML = ""; //clears when loaded

    teams.forEach(club => {
        
        const cardLogo = document.createElement("img");
       
        cardLogo.src = club.team.logo;
        cardLogo.alt = `Logo of ${club.team.name} football club`;
        cardLogo.dataset.name = club.team.name;
        cardLogo.dataset.founded = club.team.founded;
        cardLogo.dataset.venue = club.venue.name;
        cardLogo.dataset.id = club.team.id;
        cardLogo.classList.add("team-logo");
        container.appendChild(cardLogo);

    });
}

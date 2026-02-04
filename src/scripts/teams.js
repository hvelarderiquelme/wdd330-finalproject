export function renderTeams(teams) {
    console.log(teams);
    const container = document.getElementById("teams-container");
    container.innerHTML = ""; //clears when loaded

    teams.forEach(club => {
        
        //const team = club.team.name;
        // const logo = club.team.logo;
        // const id = club.team.id;
        //console.log(logo);

        const cardLogo = document.createElement("img");
        // cardLogo.id = id;
        cardLogo.src = club.team.logo;
        cardLogo.alt = `Logo of ${club.team.name} football club`;
        cardLogo.classList.add("team-logo");
        cardLogo.dataset.name = club.team.name;
        
        container.appendChild(cardLogo);

    });
}

export function renderTeams(teams) {
    //console.log(teams);
    const container = document.getElementById("teams-container");
    
    if (!container) {
    console.warn("teams-container not found");
    return;
  }
    
    container.innerHTML = ""; //clears when loaded

    teams.forEach(club => {
        const logoDiv = document.createElement('div');
        const cardLogo = document.createElement("img");
       
        cardLogo.src = club.team.logo;
        cardLogo.alt = `Logo of ${club.team.name} football club`;
        cardLogo.dataset.name = club.team.name;
        cardLogo.dataset.founded = club.team.founded;
        cardLogo.dataset.venue = club.venue.name;
        cardLogo.dataset.id = club.team.id;
        cardLogo.classList.add("team-info");
        logoDiv.classList.add("team-image");
        logoDiv.appendChild(cardLogo);
        container.appendChild(logoDiv);

    });

    //Java script to bring badges into focus on mobile version
    //desktop version has a hover effect
    if(window.innerWidth <= 768){
        const badges = document.querySelectorAll(".team-image");

        const observer = new IntersectionObserver((entries, observer)=> {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove("active");
                }
            });
        },{
            threshold: 0.7// handles when to trigger, 
                         // the larger the number, 
                         // the closer to the center
        });
        badges.forEach(badge => observer.observe(badge));
    }
}

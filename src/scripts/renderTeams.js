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

        function checkCenter() {
            const viewportHeight = window.innerHeight;
            const centerTop = viewportHeight * 0.3;
            const centerBottom = viewportHeight * 0.7;

            badges.forEach(badge => {
                const rect = badge.getBoundingClientRect();
                const badgeCenter = rect.top + rect.height / 2;

                if (badgeCenter >= centerTop && badgeCenter <= centerBottom) {
                    badge.classList.add("active");
                } else {
                    badge.classList.remove("active");
                }
            });
        }

        // Check on scroll and on load
        window.addEventListener('scroll', checkCenter);
        window.addEventListener('resize', checkCenter);
        checkCenter(); // initial check
    }
}

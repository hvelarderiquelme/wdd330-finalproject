//modal appears when hovering on the logo

export function initTeamModal(){
    const modal = document.getElementById("team-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalInfo = document.getElementById("modal-info");
    const closeModal = document.getElementById("close-modal");
    const learnMore = document.getElementById("learn-more");
    const logos = document.querySelectorAll(".team-logo");

    if(!modal || !modalTitle){
        console.error("Modal elements have not been found");
        return;
    }

    if(logos.length === 0){
        console.error("No team logos have been found");
        return;
    }

    logos.forEach(img => {
        //Open modal
        img.addEventListener("click", () => {
                   
            modalTitle.textContent = img.dataset.name;
            modalInfo.innerHTML = `<strong>Founded in: </strong>${img.dataset.founded} 
                                    <p><strong>Venue: </strong>${img.dataset.venue}</p>
                                    <strong> Team ID: ${img.dataset.id}</strong>`;
            learnMore.dataset.teamId = img.dataset.id;
            console.log( learnMore.dataset.teamId);
            modal.classList.remove("hidden");
               
        });//open modal       
    });// logos loop

    learnMore.addEventListener("click", (e) => {
        e.preventDefault();
        const teamId = learnMore.dataset.teamId;
        window.location.href = `/src/learnmore/index.html?team=${teamId}`;
    });//learn more event listener

    //Hide Modal
    closeModal.addEventListener("click",() => {
        modal.classList.add("hidden");
    });// hide modal
   
}


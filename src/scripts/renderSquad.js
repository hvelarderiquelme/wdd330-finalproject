export function renderSquad(squad){
    //console.log("squad",squad);
    const squadCards = document.getElementById("squad");
    
    squadCards.innerHTML = "";
    
    squad.forEach(player => {
        squadCards.innerHTML += `<div class="player-card">
                                    <img src="${player.photo}" alt="Poto of ${player.name}">
                                    <p>${player.name}</p>
                                    <p>Position: ${player.position}</p>
                                    <p>Number: ${player.number}</p>    
                                </div>
                                `;
    });
    
}
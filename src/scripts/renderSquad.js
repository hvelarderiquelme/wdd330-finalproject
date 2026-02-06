export function renderSquad(squad){
    //console.log("squad",squad);
    const squadCards = document.getElementById("squad");

    squadCards.innerHTML = "";

    squad.forEach(player => {
        squadCards.innerHTML += `<div>
                                    <p><strong>${player.name}</strong></p>
                                    <p><strong>Pos:${player.position}</strong></p>
                                    <p><strong>Number: ${player.number}</strong></p>
                                    <img src="${player.photo}" alt="Poto of ${player.name}">
                                 </div>
                                 `;
    });
    
}
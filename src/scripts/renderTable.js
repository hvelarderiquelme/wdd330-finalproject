export function renderTable(table){
    // console.log(table);
    const tbody = document.getElementById("table-body");
    tbody.innerHTML="";
    
    table.forEach(team => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${team.rank}</td>
            <td>${team.team.name}</td>
            <td>${team.all.played}</td>
            <td>${team.all.win}</td>
            <td>${team.all.draw}</td>
            <td>${team.all.lose}</td>
            <td>${team.goalsDiff}</td>
            <td>${team.points}</td>
            `;
        
        tbody.appendChild(row);    
    });
}
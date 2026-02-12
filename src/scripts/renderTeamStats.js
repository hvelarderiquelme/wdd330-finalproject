export function renderTeamStats(stats){
    const teamStats = document.getElementById("stats");
    console.log("stats",stats);
   
    teamStats.innerHTML = `<div class="team-stats">
                            <p>Matches played: ${stats.fixtures.played.total}</p>
                            <p>Draws: ${stats.fixtures.draws.total}</p>
                            <p>Wins: ${stats.fixtures.wins.total}</p>
                            <p>Loses: ${stats.fixtures.loses.total}</p> 
                            <p>Goals For: ${stats.goals.for.total.total}</p> 
                            <p>Goals Against: ${stats.goals.against.total.total}</p> 
                            <p>Goal Difference: ${stats.goals.for.total.total - stats.goals.against.total.total}</p> 
                            <p>Penalties scored: ${stats.penalty.scored.percentage}</p>
                          </div>
                           `;
   

}
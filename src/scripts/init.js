import { initPartials } from "/src/scripts/initPartials.js";
import { initNews } from "/src/scripts/news.js";

//console.log("init.js running");
export async function init() {
    await initPartials();
    await initNews();

}

init();


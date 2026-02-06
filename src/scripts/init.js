import { initPartials } from "./initPartials.js";
import { initNews } from "./news.js";

//console.log("init.js running");
export async function init() {
    await initPartials();
    await initNews();

}

init();


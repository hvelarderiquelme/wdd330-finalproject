import { loadPartials } from "/src/scripts/loadPartials.js";

export async function initPartials() {
    await loadPartials();   
}

initPartials();
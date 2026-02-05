import { fetchNews } from "./apis.js";
console.log("right before initNews()");
async function initNews() {
    try{
        const news = await fetchNews();
        console.log("news=", news);
    }catch (error) {
        console.error("Error loading news: ", error);
    }
    
}

initNews();
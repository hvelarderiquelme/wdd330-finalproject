import { fetchNews } from "./apis.js";
import { renderNews } from "./newsInfo.js";
//console.log("right before initNews()");
let currentPage = 1;


export async function initNews() {
    let news;
    try{
        news = await fetchNews();
        //console.log("news=", news);
    }catch (error) {
        console.error("Error loading news: ", error);
    }
    
    renderNews(news, currentPage);
    document.getElementById("next").addEventListener("click", () =>{
        currentPage++;
        renderNews(news,currentPage);
    });

    document.getElementById("prev").addEventListener("click", () => {
        if (currentPage > 1){
            currentPage--;
            renderNews(news,currentPage);
        }
    });
}

initNews();
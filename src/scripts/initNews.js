import { fetchNews } from "/src/scripts/apis.js";
import { renderNews } from "/src/scripts/renderNews.js";
//console.log("right before initNews()");
let currentPage = 1;


export async function initNews() {
    let news = [];
    try{
        const fetchedNews = await fetchNews();
        if(Array.isArray(fetchedNews)){
            news = fetchedNews;
        }else{
            console.error("Fetched news is not an array:", fetchedNews)
        }
        console.log(news);
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


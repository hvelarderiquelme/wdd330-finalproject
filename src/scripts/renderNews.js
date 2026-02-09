export function renderNews(news, page = 1){
    //console.log(news);
    const newsDisplay = document.getElementById("news");
    const ARTICLES_PER_PAGE = 10;
    const start = (page-1) * ARTICLES_PER_PAGE;
    const end = start + ARTICLES_PER_PAGE;
    const pageToDisplay = news.slice(start,end);

    newsDisplay.innerHTML = "";
    
    pageToDisplay.forEach(article => {
        newsDisplay.innerHTML += `<div class="news-item">
                                    <div class="news-image">
                                        <img src="${article.urlToImage}" alt="Image of News Article">
                                    </div>
                                    <h2>${article.title}</h2>
                                 </div>`;    
    });
    
};
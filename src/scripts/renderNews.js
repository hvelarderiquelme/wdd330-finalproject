export function renderNews(news, page = 1){
    //console.log(news);
    const newsDisplay = document.getElementById("news");
    const ARTICLES_PER_PAGE = 10;
    const start = (page-1) * ARTICLES_PER_PAGE;
    const end = start + ARTICLES_PER_PAGE;
    const pageToDisplay = news.slice(start,end);
    updatePaginationButtons(page);
    newsDisplay.innerHTML = "";
  
    pageToDisplay.forEach(article => {
        newsDisplay.innerHTML += `<div class="news-item">
                                    <div class="news-image">
                                        <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="news-image-link">
                                            <img src="${article.urlToImage}" alt="Image of News Article">
                                        </a>    
                                    </div>
                                    <h2>${article.title}</h2>
                                 </div>`;    
    });
    
};

function updatePaginationButtons(page){
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === 10;

}
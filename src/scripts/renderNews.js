export function renderNews(news, page = 1){
    //console.log("news type=", typeof news);
    const newsDisplay = document.getElementById("news");
    const ARTICLES_PER_PAGE = 10;
    const start = (page-1) * ARTICLES_PER_PAGE;
    const end = start + ARTICLES_PER_PAGE;
    const pageToDisplay = news.slice(start,end);
    const numberOfArtLeft = news.length%10;
    const pagesWithTenArt = parseInt(news.length/10) ;
    let lastPage = 0;
    if(numberOfArtLeft === 0)
        lastPage = pagesWithTenArt;
    else{ lastPage = pagesWithTenArt + 1};

    //console.log(numberNewsArticles);
    // console.log(pagesWithTenArt);
    // console.log(numberOfArtLeft);

    updatePaginationButtons(page,lastPage);
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

function updatePaginationButtons(page, lastPage){
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    // console.log(lastPage);

    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === lastPage;
   
}
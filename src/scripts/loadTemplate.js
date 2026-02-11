export async function loadTemplate(path) {
    
    const app = document.getElementById("app");

    if(!app){//protection against silent errors
        throw new Error("App container (#app) not found in index.html")
    }

    try{
        const response = await fetch(path); //grabs path from init.js

        if(!response.ok){//if path is wrong
            throw Error(`Failed to load template: ${path}`);
        }

        const html = await response.text();
        app.innerHTML = html;
    }catch (error){
        console.error("Template loading error:", error);
    }
    
}
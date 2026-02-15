import { renderComments } from "/src/scripts/renderComments.js";

export function loadComments() {
    let comments = [];

    try{
        comments = JSON.parse(localStorage.getItem("fanComments") || "[]");
    }catch (error){
        console.error("Invalid JSON in localStorage. Resetting...");
        localStorage.setItem("fanComments", JSON.stringify([]));
        comments = [];
    }
    
    renderComments(comments);

}
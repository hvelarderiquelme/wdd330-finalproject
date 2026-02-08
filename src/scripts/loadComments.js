import { renderComments } from "/src/scripts/renderComments.js";

export function loadComments() {
    const comments = JSON.parse(localStorage.getItem("fanComments")) || [];
    //console.log("comments", comments);
    renderComments(comments);

}
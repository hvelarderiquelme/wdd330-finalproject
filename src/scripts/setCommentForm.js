import { loadComments } from "/src/scripts/loadComments.js";

export function setCommentForm(profile) {
    const form = document.getElementById("comment-form");
    const comment = document.getElementById("comment");

    form.addEventListener("submit", e =>{
        e.preventDefault();
        const text = comment.value.trim();
        if(!text) return;

        const comments = JSON.parse(localStorage.getItem("fanComments") || []);

        comments.push({
            username: profile.username,
            text: text
        });

        localStorage.setItem("fanComments",JSON.stringify(comments));

        comment.value = "";
        loadComments();
    });
    
    
}
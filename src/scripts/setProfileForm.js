import { setCommentForm } from "/src/scripts/setCommentForm.js"

export function setProfileForm(){
    const form = document.getElementById("profile-form");
    const profileSection = document.getElementById("profile-section");
    const commentForm = document.getElementById("comment-form");
    const profileName = document.getElementById("username");
    const favoriteClub = document.getElementById("club");



    form.addEventListener("submit", e => {
        e.preventDefault();

        const username = profileName.value.trim();
        const club = favoriteClub.value.trim();
        
        if(!username || !club)return;

        const profile = {username, favoriteClub:club};
        localStorage.setItem("profile",JSON.stringify(profile));
        
        profileSection.classList.add("is-hidden");
        commentForm.classList.remove("is-hidden")
        setCommentForm(profile);
        // location.reload();
    });
}
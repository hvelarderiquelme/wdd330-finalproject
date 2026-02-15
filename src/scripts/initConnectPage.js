// localStorage.setItem(
//       "fanComments",
//       JSON.stringify([
//         { username: "Alex", text: "What a goal!" },
//         { username: "Jamie", text: "Defense was awful today." },
//         { username: "Sam", text: "Ref ruined the match." }
//       ])
//     )

import { loadComments } from "/src/scripts/loadComments.js";
import { setProfileForm } from "/src/scripts/setProfileForm.js";
import { setCommentForm } from "/src/scripts/setCommentForm.js"


export async function initConnectPage() {
    if(!localStorage.getItem("fanComments")){
        localStorage.setItem("fanComments", JSON.stringify([]));
    }
    const profileSection = document.getElementById("profile-section");
    const commentForm = document.getElementById("comment-form");
    const profile = JSON.parse(localStorage.getItem("profile"));
    
    loadComments();

    const hasProfile = profile && profile.username && profile.favoriteClub;

    if (hasProfile) {
        profileSection.classList.add("is-hidden");
        commentForm.classList.remove("is-hidden");
        setCommentForm(profile);
    } else {
        profileSection.classList.remove("is-hidden");
        commentForm.classList.add("is-hidden");
        setProfileForm();
    }

    
}

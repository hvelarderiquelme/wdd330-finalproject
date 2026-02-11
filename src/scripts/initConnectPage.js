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
    const profileSection = document.getElementById("profile-section");
    const commentForm = document.getElementById("comment-form");
    const profile = JSON.parse(localStorage.getItem("profile"));
    // console.log(profile);
    console.log("RAW profile:", localStorage.getItem("profile"));
  console.log("PARSED profile:", profile);
    loadComments();

    if (profile && profile.username && profile.favoriteClub) {
        profileSection.style.display = "none";
        commentForm.style.display = "flex";
        setCommentForm(profile);
    } else {
        profileSection.style.display = "block";
        commentForm.style.display = "none";
        setProfileForm();
    }

    
}

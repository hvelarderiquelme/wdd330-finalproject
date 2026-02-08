// localStorage.setItem(
//       "fanComments",
//       JSON.stringify([
//         { username: "Alex", text: "What a goal!" },
//         { username: "Jamie", text: "Defense was awful today." },
//         { username: "Sam", text: "Ref ruined the match." }
//       ])
//     )

import { loadComments } from "./loadComments.js";
import { setProfileForm } from "./setProfileForm.js";
import { enableGuestMode } from "/src/scripts/enableGuestMode.js"
import { setCommentForm } from "/src/scripts/setCommentForm.js"


export async function initConnectPage() {
    
    const profile = JSON.parse(localStorage.getItem("profile"));
    loadComments();

    if(!profile){
        setProfileForm();
    }else{
        setCommentForm(profile);
    }
    
}

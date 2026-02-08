import { loadComments } from "./loadComments.js";
import { enableGuestMode } from "/src/scripts/enableGuestMode.js"
import { setCommentForm } from "/src/scripts/setCommentForm.js"


export async function initConnectPage() {
    
    const profile = JSON.parse(localStorage.getItem("profile"));
    loadComments();

    if(!profile){
        enableGuestMode();
    }else{
        setCommentForm(profile);
    }
    
}

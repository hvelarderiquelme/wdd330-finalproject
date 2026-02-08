export function setProfileForm(){
    document.getElementById("profile-section").hidden = false;
    const form = document.getElementById("profile-form");
    const profileName = document.getElementById("username");
    const favoriteClub = document.getElementById("club");

    form.addEventListener("submit", e => {
        e.preventDefault();

        const username = profileName.value.trim();
        const club = favoriteClub.value.trim();
        
        localStorage.setItem(
            "profile",
            JSON.stringify({
            username: username,
            favoriteClub: club
            })
        )
        location.reload();
    });
}
export async function loadPartials() {
    await loadPartial("header","/public/partials/header.html");
    await loadPartial("footer","/public/partials/footer.html");
    await loadPartial("nav-top","/public/partials/nav.html");
    await loadPartial("nav-bottom","/public/partials/nav.html");

    async function loadPartial(id,path) {
        const element = document.getElementById(id);
        if(!element) return;
        const res = await fetch(path);
        element.innerHTML = await res.text();
    }
    
}
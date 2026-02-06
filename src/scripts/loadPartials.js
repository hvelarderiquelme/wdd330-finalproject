export async function loadPartials() {
    await loadPartial("header","/src/partials/header.html");
    await loadPartial("footer","/src/partials/footer.html");
    await loadPartial("nav-top","/src/partials/nav.html");
    await loadPartial("nav-bottom","/src/partials/nav.html");

    async function loadPartial(id,path) {
        const element = document.getElementById(id);
        if(!element) return;
        const res = await fetch(path);
        element.innerHTML = await res.text();
    }
    
}
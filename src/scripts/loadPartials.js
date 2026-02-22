export async function loadPartials() {
  await loadPartial("header", "/src/partials/header.html");
  await loadPartial("footer", "/src/partials/footer.html");
  await loadPartial("nav-top", "/src/partials/nav.html");
  await loadPartial("nav-bottom", "/src/partials/nav.html");
}

async function loadPartial(id, path) {
  const element = document.getElementById(id);
  if (!element) return;

  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load ${path}`);
    element.innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}

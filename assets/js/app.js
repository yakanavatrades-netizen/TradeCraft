
// -----------------------------
// CAMBIO DE IDIOMA
// -----------------------------
function setLang(lang) {
    document.querySelectorAll("[data-bg]").forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}

// -----------------------------
// SUBMENÚS INTERACTIVOS
// -----------------------------

document.querySelectorAll(".collapsible").forEach(el => {
    el.addEventListener("click", () => {
        const target = document.getElementById(el.dataset.target);

        if (!target) return;

        target.classList.toggle("open");
    });
});


function setLang(l){
  document.querySelectorAll('[data-'+l+']').forEach(el=>{
    el.textContent = el.getAttribute('data-'+l);
  });
}
setLang('bg');
// =========================
//   SISTEMA DE TRADUCCIÓN
// =========================

// Leer idioma guardado o usar BG por defecto
let currentLang = localStorage.getItem("tradecraft-lang") || "bg";

// Cuando la página se cargue, aplica idioma
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
});

// Cambiar idioma desde los botones BG/EN
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem("tradecraft-lang", lang);
    applyLanguage(lang);
}

// Reemplazar textos en toda la página
function applyLanguage(lang) {
    const elements = document.querySelectorAll("[data-bg], [data-en]");

    elements.forEach(el => {
        if (lang === "bg") {
            el.innerHTML = el.getAttribute("data-bg");
        } else {
            el.innerHTML = el.getAttribute("data-en");
        }
    });
}

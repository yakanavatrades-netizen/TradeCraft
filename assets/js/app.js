
function setLang(l){
  document.querySelectorAll('[data-'+l+']').forEach(el=>{
    el.textContent = el.getAttribute('data-'+l);
  });
}
setLang('bg');

export function darkMode() {

const chavemodescuro = document.getElementById('chavemodescuro')
const body = document.querySelector('body')



chavemodescuro.addEventListener('click', ()=>{
    chavemodescuro.classList.toggle('dark')
    body.classList.toggle('dark')
    
    

});
}
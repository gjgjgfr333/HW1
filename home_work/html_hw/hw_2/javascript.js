let naw =document.getElementById('naw')
let burger = document.getElementById('burger')
burger.addEventListener('click',function(){
    naw.classList.toggle('nawMenuAnim')
})
burger.addEventListener("click", function (){
    burger.classList.toggle('burger-to-cross')
})
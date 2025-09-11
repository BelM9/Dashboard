//variables qui donnent accès au elements du DOM 



const menuBtn = document.querySelector('.menu-btn')
backBtn = document.querySelector('.back-btn')
menu = document.querySelector('nav')

menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)'
})

backBtn.addEventListener('click', () => {
    // menu.style.display = 'none'
    menu.style.transform = 'translate(calc(-100% - 2rem))'


})

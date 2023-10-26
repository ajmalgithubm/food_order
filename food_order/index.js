let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    console.log("scrolling occur", window.pageYOffset)
    if (window.pageYOffset > 60) {
        console.log("greater than 60")
        document.querySelector('#scroll-top').classList.add('scroll-active');
    } else {
        document.querySelector('#scroll-top').classList.remove('scroll-active');
    }
}



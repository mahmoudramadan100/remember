let section = document.querySelector('.section-3');
let text = document.querySelector('.section-3 span');
let btn = document.querySelector('.btn');

window.onscroll = function() {
    if (window.scrollY >= 1300)  {
        text.classList.add('color')
    }
    if(window.scrollY >= 700) {
        btn.style.display= "block"
    } else {
        btn.style.display = "none"
    }
};

window.onclick = function() {
    scroll({
        top: 0,
        behavior: 'smooth'
    })
}
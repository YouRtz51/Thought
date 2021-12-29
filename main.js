window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

let navbtn = document.querySelector('header nav .navmenu');
let wrapper = document.querySelector('.wrapper');
let list = document.querySelector('header nav ul');
navbtn.addEventListener('click', function() {
    list.classList.toggle('active');
    wrapper.classList.toggle('active');
});
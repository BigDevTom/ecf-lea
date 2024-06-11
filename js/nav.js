const burgerButton = document.getElementById('burger-btn');

const menu = document.querySelector('.menu');

burgerButton.addEventListener('click', function() {
    menu.classList.toggle('active')
})
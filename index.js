const menuButton = document.querySelector('[data-button]')
const header = document.querySelector('[data-header')

menuButton.addEventListener('click', function() {
    header.classList.toggle('open')
})

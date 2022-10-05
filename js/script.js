let modal = document.querySelector('.first-btn button');
modal.addEventListener('click', () => {
    document.querySelector('.first-modal').style.display = 'block'
})

let modalclose = document.querySelector('.first-modal-bg-close');
modalclose.addEventListener('click', () => {
    document.querySelector('.first-modal').style.display = 'none'
})
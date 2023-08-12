let popup = document.querySelector('#popup-container');
let openBt = document.querySelector('#openBt');
let closeBt = document.querySelector('#closeBt');

function openPopup() {
    popup.classList.add('active');
    popup.classList.add('blur');
    let blur = 4;
    openBt.style.filter = `blur(${blur}px)`
}

function closePopup() {
    popup.classList.remove('active');
    popup.classList.remove('blur');
    let blur = 0;
    openBt.style.filter = `blur(${blur}px)`
}

popup.addEventListener('click', (e) => {
    if (e.target.id == 'popup-container') {
        closePopup()
    }
})
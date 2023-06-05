function Modal1() {
    const Modal1 = document.querySelector('.Modal1');
    const background = document.querySelector('.Background');

    if (Modal1.classList.contains('active')) {
        Modal1.classList.remove('active');
        background.classList.remove('active');
    } else {
        Modal1.classList.add('active');
        background.classList.add('active');
    }
}

function Modal2() {
    const Modal1 = document.querySelector('.Modal2');
    const background = document.querySelector('.Background2');

    if (Modal1.classList.contains('active')) {
        Modal1.classList.remove('active');
        background.classList.remove('active');
    } else {
        Modal1.classList.add('active');
        background.classList.add('active');
    }
}

function Modal3() {
    const Modal1 = document.querySelector('.Modal3');
    const background = document.querySelector('.Background3');

    if (Modal1.classList.contains('active')) {
        Modal1.classList.remove('active');
        background.classList.remove('active');
    } else {
        Modal1.classList.add('active');
        background.classList.add('active');
    }
}
const btnEl = document.querySelector('.btn');

const toggleOptions = () => {
    const wrapperEl = document.querySelector('wrapper');
    const iconEl = btnEl.querySelector('i');
    
    wrapperEl.classList.contains('ri-share-line');

    if (iconEl.classList.contains('ri-share-line')) {
        iconEl.classList.replace('ri-share-line', 'ri-close-line');
    }
    else {
        iconEl.classList.replace('ri-close-line', 'ri-share-line');
    }
};

btnEl.addEventListener('click', toggleOptions);

const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})
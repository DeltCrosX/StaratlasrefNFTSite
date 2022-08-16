const fadeOut = () => {
    const loaderWrapper = document.querySelector('.preloadWrapper');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);
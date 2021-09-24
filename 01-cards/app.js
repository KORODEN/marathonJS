function slidesPlugin(active = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[active].classList.add('active')
    document.querySelector(".blur-effect").style.backgroundImage =
        slides[active].style.backgroundImage;

    for (const slide of slides) {
        slide.addEventListener('click', () => {

            clearActiveClasses()

            slide.classList.add('active')
            
            document.querySelector(".blur-effect").style.backgroundImage =
        slide.style.backgroundImage;
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(3)
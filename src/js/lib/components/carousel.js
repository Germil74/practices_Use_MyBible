import $ from '../core'
// this[i] = '.carousel'
$.prototype.carousel = function () {
    for (let i = 0; i < this.length; i++) {
        let width = (window.getComputedStyle(this[i].querySelector('.carousel-inner')).width)  // ширина .carousel-inner
        const slides = this[i].querySelectorAll('.carousel-item')
        const slidesField = this[i].querySelector('.carousel-slides')
        const dots = this[i].querySelectorAll('.carousel-indicators li')
        console.log(dots)
        slidesField.style.width = 100 * slides.length + '%'
        slides.forEach(slide => {
            slide.style.width = width
        })
        width = +width.replace(/\D/g, '')
        let offset = 0
        let slideIndex = 0
        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault()
            if (offset == (width * (slides.length - 1))) {
                offset = 0
            } else {
                offset += width    // при каждом клике на next увеличиваем offset на ширину картинки

            }
            slidesField.style.transform = `translateX(-${offset}px)`

            if(slideIndex == slides.length - 1) {
                slideIndex = 0
            }else {
                slideIndex++
            }
            dots.forEach(dot => dot.classList.remove('active') )
            dots[slideIndex].classList.add('active')
        })
        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault()
            if (offset == 0) {
                offset = width * (slides.length - 1)
            } else {
                offset -= width    // при каждом клике на next увеличиваем offset на ширину картинки
            }

            slidesField.style.transform = `translateX(-${offset}px)`

            if(slideIndex == 0) {
                slideIndex = slides.length - 1
            }else {
                slideIndex--
            }
            dots.forEach(dot => dot.classList.remove('active') )
            dots[slideIndex].classList.add('active')
        })
        const slider = this[i].getAttribute('id')
        $(`#${slider} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to')
            slideIndex = slideTo
            offset = width * slideTo
            slidesField.style.transform = `translateX(-${offset}px)`
            dots.forEach(dot => dot.classList.remove('active') )
            dots[slideIndex].classList.add('active')
        })
    }
}


$('.carousel').carousel()

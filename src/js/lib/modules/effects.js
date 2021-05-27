import $ from '../core'

$.prototype.animateOverTime = function (duration, callback, afterFinishing) {
    let timeStart

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time
        }
        let timeElapsed = time - timeStart
        let complection = Math.min(timeElapsed / duration, 1)   // здесь число будет постепенно увеличиваться, но не будет больше 1

        callback(complection)

        if(timeElapsed < duration) {   // анимация работает
            requestAnimationFrame(_animateOverTime)
        }else {                       // анимация завершена
            if (typeof finallet === 'function') {
                afterFinishing()
            }
        }
    }

    return _animateOverTime
}

$.prototype.fadeIn = function (duration, display, afterFinishing) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block'

        const _fadeIn = (complection) => {
        this[i].style.opacity = complection
        }

        const ani = this.animateOverTime(duration, _fadeIn, afterFinishing)
        requestAnimationFrame(ani)
    }
    return this
}

$.prototype.fadeOut = function (duration, afterFinishing) {
    for (let i = 0; i < this.length; i++) {


        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection
            if (complection === 1) {
                this[i].style.display = 'none'
            }
        }

        const ani = this.animateOverTime(duration, _fadeOut, afterFinishing)
        requestAnimationFrame(ani)
    }
    return this
}

$.prototype.fadeToggle = function (duration, display, afterFinishing) {
    for (let i = 0; i < this.length; i++) {

        if(window.getComputedStyle(this[i]).display === 'none') { // window.getComputedStyle(this[i]) так ма обращаемся к вычисленным стилям
            this[i].style.display = display || 'block'
            const _fadeIn = (complection) => {
                this[i].style.opacity = complection
            }

            const ani = this.animateOverTime(duration, _fadeIn, afterFinishing)
            requestAnimationFrame(ani)

        }else {
            const _fadeOut = (complection) => {

                this[i].style.opacity = 1 - complection
                if (complection === 1) {
                    this[i].style.display = 'none'
                }
            }

            const ani = this.animateOverTime(duration, _fadeOut, afterFinishing)
            requestAnimationFrame(ani)
        }


    }
    return this
}

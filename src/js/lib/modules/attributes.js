import $ from '../core'
// Домашнее задание

$.prototype.addAttributes = function (...classNames) {
    for (let i = 0; i < this.length; i++) {

        this[i].classList.add(...classNames)
    }

    return this
}

$.prototype.removeAttributes = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames)
    }

    return this
}


$.prototype.hasAttributes = function (classNames) {  // нужно доработать
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue
        }
        return this[i].classList.contains(classNames)
    }

    return this
}

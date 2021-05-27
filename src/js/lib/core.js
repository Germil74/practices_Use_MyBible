/*(() => {
    const $ = function (selector) {
        const elements = document.querySelectorAll(selector)
        const obj = {}

        obj.hide = () => {
            elements.forEach(elem => {
                elem.style.display = 'none'
            })
            return obj
        }

        obj.show = () => {
            elements.forEach(elem => {
                elem.style.display = ''   // так браузер сам будет решать что подставить
            })
            return obj
        }

        return obj
    }
    window.$ = $
})()*/


const $ = function (selector) {
    return new $.prototype.init(selector)
}

$.prototype.init = function (selector) {
    if (!selector) {
        return this   // {}  Если мы обращаемся к новосозданному объекту this будет пустой
    }

    if(selector.tagName) {  // если в селекторе нода помещаем её в текущий объект

      this[0] = selector
        this.length = 1
       return this
    }

    Object.assign(this, document.querySelectorAll(selector))
    this.length = document.querySelectorAll(selector).length
    return this
}

$.prototype.init.prototype = $.prototype   // теперь все методы которые будут добавлены в $.prototype.init будут доступны в $.prototype

window.$ = $


export default $



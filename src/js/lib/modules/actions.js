import $ from '../core'

$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content
        } else {
            return this[i].innerHTML
        }
    }
    return this
}

$.prototype.eq = function (i) {  // элемент по порядковому номеру в дом дереве
    const swap = this[i]
    const objLength = Object.keys(this).length   //  преобразуем объект в массив ключей и уже у массива вызываем свойство .length
    for (let j = 0; j < objLength; j++) {
        delete this[j]  // удаляем все свойства при этом все методы в прототипе остались
    }

    this[0] = swap
    this.length = 1
    return this
}

$.prototype.index = function () {  //index элемента по порядковому номеру в дом дереве (в выборке один элемент) в одном родителе
    const parent = this[0].parentNode  //  получаем родителя искомого элемента
    const childs = [...parent.children]  // получаем всех потомков этого родителя   (здесь псевдо колекция у которой нет методов массива а именно findIndex) превращаем в маcсив с помощью [...spred]

    const findMyIndex = (item) => {
        return item === this[0]  // получаем элемент который унас в объекте $
    }

    return childs.findIndex(findMyIndex)  // здесь получаем индекс искомого элемента
}

$.prototype.find = function (selector) {  // поиск элементов по selector из коллекции выбранных элементов
    let numberOfItems = 0  // Общее количество найденных элементов
    let counter = 0     // счетчик

    const copyObj = Object.assign({}, this);   //делаем поверхностную копию (прототип меняется)
    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector)
        if (arr.length == 0) {
            continue
        }
        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j]   // помещаем в объект элемент под номером  counter (попорядку ) this[0] = element
            counter++
        }
        numberOfItems += arr.length
    }

    this.length = numberOfItems
    const objLength = Object.keys(this).length
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }
    return this
}

// ближайший блок по заданному селектору
$.prototype.closest = function (selector) {
    let counter = 0 // счетчик найденых элементов

    for (let i = 0; i < this.length; i++) {

       if (!this[i].closest(selector)) {
           continue
       }

        this[i] = this[i].closest(selector)   // может вернуться null и это нужно както исправить
        counter++
    }

  const objLength = Object.keys(this).length

    for (; counter < objLength; counter++) {
        delete this[counter];
    }
    return this
}

// получить всех соседей не включая самого элемента в одном родительском блоке
$.prototype.siblings = function () {
    let numberOfItems = 0  // Общее количество найденных элементов
    let counter = 0     // счетчик

    const copyObj = Object.assign({}, this);   //делаем поверхностную копию (прототип меняется)

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children    // parentNode.children  обращаемся к родителю блока и получаем всех детей

        for (let j = 0; j < arr.length; j++) {

            if (copyObj[i] === arr[j]) {
                continue
            }
            this[counter] = arr[j]   // помещаем в объект элемент под номером  counter (попорядку ) this[0] = element
            counter++
        }
        numberOfItems += arr.length - 1
    }

    this.length = numberOfItems
    const objLength = Object.keys(this).length
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }
    return this
}

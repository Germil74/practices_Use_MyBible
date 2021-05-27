import $ from '../core'

$.prototype.tab = function () {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', () => {
            // выбираем текущий элемент добавляем класс актив и у всех соседей удаляем класс актив

            $(this[i])
                .addClass('tab-item--active')
                .siblings()
                .removeClass('tab-item--active')
                .closest('.tab')
                .find('.tab-content')
                .removeClass('tab-content--active')
                .eq($(this[i]).index())
                .addClass('tab-content--active')
        })
    }
}

$('[data-tabpanel] .tab-item').tab()

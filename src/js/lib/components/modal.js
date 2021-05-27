import $ from '../core'

// trigger  data-togle="modal"  (кнопка) data-targe="#ID-modal"  указывает на конкретное модальное окно по id erfpsdfnm c #



$.prototype.modal = function (created) {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target') // здесь получаем id modal окна на которое ссылается тригер
        $(this[i]).click((e) => {
            e.preventDefault()
            $(target).fadeIn(500)
            document.body.style.overflow = 'hidden' // запрещаем прокрутку контента под окном
// реализовать баг из за скрола страницы
        })

        const closeElements = document.querySelectorAll(`${target} [data-close]`)
        closeElements.forEach(elem => {
            $(elem).click((e) => {
                $(target).fadeOut(500)
                document.body.style.overflow = '' // восстанавливаем прокрутку контента под окном
                if(created) {
                    document.querySelector(target).remove()
                }
            })

        })

        // закрытие по клику на подложку
        $(target).click(e => {
           // if(e.target.classList.contains('modal')){
           if($(e.target).hasClass('modal')){
                $(target).fadeOut(500)
                document.body.style.overflow = '' // восстанавливаем прокрутку контента под окном
                if(created) {
                    document.querySelector(target).remove()
                }
            }
        })

    }
}


$('[data-togle="modal"]').modal()


$.prototype.createModal = function ({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement(('div'))
        modal.classList.add('modal')
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1)) // получаем id без #


        //  btns { count: number, settings: Array[[text: string, classNames: Array = [], close:boolean, callback: Function]]
        const buttons = []

        for (let j = 0; j < btns.count; j++) {
            const bt = btns.settings[j]
                let btn = document.createElement('button') // создаём кнопку
            btn.classList.add('btn', ...bt[1])  // настраиваем классы к кнопке
            btn.textContent = bt[0]  // помещаем текст
            if(bt[2]) {
                btn.setAttribute('data-close', 'true')  // устанавливаем data-close
            }
            if(bt[3] && typeof bt[3] === 'function') {
                btn.addEventListener('click', bt[3])   // подвешиваем обработчик и помещаем туда коллбэк функцию
            }

            buttons.push(btn)
        }

        modal.innerHTML = `
         <div class="modal-dialog">
        <div class="modal-content">
            <button class="close" data-close >
                <span>&times;</span>
            </button>
            <div class="modal-header">
                <div class="modal-title">
                    ${text.title}
                </div>
            </div>
            <div class="modal-body">
              ${text.body}
                </div>
            <div class="modal-footer">
       
            </div>
        </div>
    </div>
        `
modal.querySelector(".modal-footer").append(...buttons)  //
document.body.appendChild(modal) // добавляем модальное окно как ребенока body
$(this[i]).modal(true) // инициализируем модальное окно (подвешиваем обработчики)  и говорим что оно созданно программно true
$(this[i].getAttribute('data-target')).fadeIn(500)  // вызываем на странице
    }
}









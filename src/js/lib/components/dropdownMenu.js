import $ from '../core'

$.prototype.dropdown = function () {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id')
        $(this[i]).click(() => {
            $(`[data-toggle-id = "${id}"]`).fadeToggle(300)
        })
    }

}

//$('.dropdown-toggle').dropdown()



/*
*
* вариант 2 когда нужно вызывать компонент динамически
*
*
*
* $('.wrap').html(`
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
        <a href="#!" class="dropdown-item">Action</a>
        <a href="#!" class="dropdown-item">Action #2</a>
        <a href="#!" class="dropdown-item">Action #3</a>
    </div>
</div>
`)
$('.dropdown-toggle').dropdown()
* */

import './lib/lib'
import './practice/practice'
/*import $ from "./lib/core";*/


/*$('#first').on('click', () => {
    $('div').eq(0).fadeToggle(800)
})

$('[data-count="second"]').on('click', () => {
    $('div').eq(1).fadeToggle(800)
})
//console.log($('.block').find('.more'))
//console.log($('.some').closest('.findmeq'))
// console.log($('button').fadeIn(1800))

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800)
})

$('.wrap').html(`
<div class="dropdown mb-30">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton4">Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton4">
        <a href="#!" class="dropdown-item">Action</a>
        <a href="#!" class="dropdown-item">Action #2</a>
        <a href="#!" class="dropdown-item">Action #3</a>
    </div>
</div>
`)
$('.dropdown-toggle').dropdown()

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title Dinamic',
        body: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at cum ducimus iure minima quibusdam quisquam reprehenderit suscipit unde voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda exercitationem iste quidem quo quos sit suscipit! Animi culpa necessitatibus suscipit.',
    },
    btns: {
        count: 3,
        settings: [
            ['Close', ['btn-danger', 'mr-10'], true],
            ['Save changes', ['btn-success', 'test'], false, () => {
            alert('Данные сохранены')
            }],
            ['New button', ['btn-warning', 'ml-10'], false, () => {
                alert('Новые Данные сохранены')
            }],
        ]
    }
}))


$().get('https://jsonplaceholder.typicode.com/todos/1')
.then(res => console.log(res))


$().post('https://jsonplaceholder.typicode.com/todos', {
    completed: false,
    id: 202,
    title: "Супер задание на день",
    userId: 15
})
    .then(res => console.log(res))*/

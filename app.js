const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <div class="d-flex gap-2">
                <i class="far fa-trash-alt delete"></i>
                <i class="fa-solid fa-check finished"></i>
            </div>
        </li>
    `;

    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }

});

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    } else if (e.target.classList.contains('finished')) {
        e.target.parentElement.parentElement.classList.add('complete')
    }
});

const filterTodos = (searchTerm) => {
   Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(searchTerm))
    .forEach(todo => todo.classList.add('filtered'))

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(searchTerm))
    .forEach(todo => todo.classList.remove('filtered'))
}

// search event
search.addEventListener('keyup', () => {
    const searchTerm = search.value.trim().toLowerCase();
    filterTodos(searchTerm)
})
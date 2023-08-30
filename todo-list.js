const todoList = document.querySelector('ul')
const searchToDo = document.querySelector('input')

// SEARCH AND FILTER TO DOS
const filterToDos = (term) => {
    Array.from(todoList.children)
    .filter((li) => {
        return !li.textContent.toLowerCase().includes(term) // the filter method returns an ARRAY!
    })
    .forEach((removedToDo) => {
        removedToDo.classList.add('filtered')
    })

    Array.from(todoList.children)
    .filter((li) => {
        return li.textContent.toLowerCase().includes(term)
    })
    .forEach((removedToDo) => {
        removedToDo.classList.remove('filtered')
    })
}

searchToDo.addEventListener('keyup', (e) => {
    const term = e.target.value.trim()
    filterToDos(term)
})



// ADDING TO DOS
const addForm = document.querySelector('.add')
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newContent = e.target.children.add.value.trim()
    const newToDo = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${newContent}</span>
        <button><i class="far fa-trash-alt delete"></i></button>
    </li>`
    if(newContent) {
        todoList.innerHTML += newToDo
        addForm.reset()
    }
})


// DELETING TO DOS
todoList.addEventListener('click', (e) => {
    if(e.target.childElementCount == 0) {
       e.target.parentElement.parentElement.remove()
    }
})
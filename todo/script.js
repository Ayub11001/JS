// state management
let todos = JSON.parse(localStorage.getItem("todos")) || []

// [
//     {
//         id,
//         task,
//         isComplete
//     },
//     {
//         id,
//         task,
//         isComplete
//     },
//     {
//         id,
//         task,
//         isComplete
//     },
//     {
//         id,
//         task,
//         isComplete
//     },
// ]

// Dom - elements
const input = document.querySelector(".input");
const addButton = document.querySelector(".add-button");
const todoDiv = document.querySelector(".todo-div");

// utility methods

const add = (task) => {
    todos.push({
        id: Date.now(),  
        task,
        isComplete: false
    })
    save()
}

const remove = (id) => {
    todos = todos.filter(
        (todo) => {
            return todo.id !== id
        }
    )
    save()
}

const toggleComplete = (id) => {
    todos.map(
        (todo) => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        }
    )
    save()
}

const save = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    render()
}

// render methods

const renderTodo = (todo) => {
    const div = document.createElement("div");
    div.classList.add("todo")
    todoDiv.appendChild(div);

    const text = document.createElement("p");
    div.appendChild(text);
    text.innerText = todo.task;
    if(todo.isComplete) text.style.textDecoration = "line-through"


    const completeButton = document.createElement("button")
    div.appendChild(completeButton);
    completeButton.innerText = "Complete";
    completeButton.classList.add("complete");
    completeButton.addEventListener(
        "click",
        () => {
            toggleComplete(todo.id)
        }
    );

    const removeButton = document.createElement("button");
    div.appendChild(removeButton);
    removeButton.innerText = "Remove";
    removeButton.classList.add("remove");
    removeButton.addEventListener(
        "click",
        () => {
            remove(todo.id)
        }
    )

}

const render = () => {
    todoDiv.innerHTML = "";
    todos.map(
        (todo) => {
            renderTodo(todo)
        }
    )  
}

// init

addButton.addEventListener(
    "click",
    () => {
        if(input.value === "") return;
        add(input.value);
        input.value = ""
    }
);

document.body.addEventListener(
    "keydown",
    (event) => {
        if(input.value === "" || event.key !== "Enter") return;
        add(input.value);
        input.value = ""
    }
)

render()

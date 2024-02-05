let todos = [
	{
		id: "el",
		title: "Task 1",
		isComplete: false,
	},
];

const resderTodos = (todos) => {
	const list = document.getElementById("task-list");
	list.innerHTML = null;
	todos.map((item) => {
		const listItem = document.createElement("li");
		listItem.classList.add("task");
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.classList.add("checkbox");
		checkbox.addEventListener("click", (e) => taggleCompleteTodo(e, item.id));
		const deleteButton = document.createElement("button");
		deleteButton.classList.add("delete-button");
		deleteButton.innerText = "Delete";
		deleteButton.addEventListener("click", () => deleteTodoHandler(item.id));
		const editButton  = document.createElement("button");
		editButton.classList.add("edit-button");
		editButton.innerText = "Edit";
		const title = document.createElement("span");
		title.classList.add("title");
		if (item.isComplete) {
			title.classList.add("is-complete");
		}
		checkbox.checked = item.isComplete;
		title.innerHTML = item.title;
		listItem.append(checkbox, title, deleteButton);
		list.append(listItem);
	});
};
resderTodos(todos);

// Add todo function
const addButton = document.getElementById("add-button");
const text = document.getElementById("new-task");
const addTodoHandler = () => {
	if (text.value === "") {
		text.style.border = "1px solid #f00";
		text.style.ontline = "#f00";
		return;
	}
	text.style.border = "1px solid #555";
	text.style.ontline = "";
	const newTodo = {
		id: Date.now().toString(),
		title: text.value,
		isComplete: false,
	};
	todos.push(newTodo);
	resderTodos(todos);
	text.value = "";
};

addButton.addEventListener("click", addTodoHandler);

// delete todo function

const deleteTodoHandler = (id) => {
	const deletedTodos = todos.filter((item) => item.id !== id);
	todos = deletedTodos;
	resderTodos(todos);
};

// taggle complete todo
const taggleCompleteTodo = (e, id) => {
	const updatedTodos = todos.map((item) => {
		if (item.id === id) {
			return { ...item, isComplete: e.target.checked };
		}
		return item;
	});
	todos = updatedTodos;
	resderTodos(todos);
};

function todoList(todos) {

const divContainer = document.querySelector("#content")
const ul = document.createElement("ul")

todos.forEach(el => {
  const li = document.createElement("li")
  li.style.listStyleType = "circle"
  
  li.textContent = el.todo;
  
  li.addEventListener("click", (e) => {
    if(li.style.textDecorationLine === "line-through") {
      li.style.textDecorationLine = "none"
    }
    else {
      li.style.textDecorationLine = "line-through"
    }
    
    
  })
  
  ul.appendChild(li)
});
divContainer.appendChild(ul)
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);
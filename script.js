//your code here

let todos=[];

const addbtn=document.getElementById("addTodoBtn");
const ol=document.getElementById("todoList");

addbtn.addEventListener('click',()=>{
	 const input = document.getElementById("newTodoInput").value.trim();
	if(!input){
		alert("Todo should be filled");
		return;
	}
	todos.push(input);
	 document.getElementById("newTodoInput").value = ""; 
	renderlist();
})

function  renderlist() {
	ol.innerHTML = ""; 
	todos.forEach(todo=>{
		const li=document.createElement('li');
		li.textContent=todo;
		ol.appendChild(li);
	})
}



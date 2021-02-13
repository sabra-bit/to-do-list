let addToDoButton = document.getElementById("addToDo");
let toDoContainar = document.getElementById("toDoContaner");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainar.appendChild(paragraph);
    inputField.value="";

    paragraph.addEventListener('click',function(){
            paragraph.style.textDecoration = "line-through";

    })

    paragraph.addEventListener('dblclick',function(){
        toDoContainar.removeChild(paragraph);

})
})
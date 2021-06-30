loadEvents();
function loadEvents(){
    document.querySelector('form').addEventListener('submit',submit);
    document.querySelector('ul').addEventListener('click',deleteOrTick);
}

function submit(a){
    a.preventDefault();
    let input = document.querySelector('input');
    if(input.value != '')
    addTask(input.value);
    input.value = '';
}

function addTask(task){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<div class="input-group row"><div class="col-11"><label>${task}</label></div>
    <span class="delete">x</span></div>`;
    ul.appendChild(li);
    document.querySelector('.allToDos').style.display = 'block';
}

function deleteOrTick(a){
    if(a.target.className == 'delete')
      deleteTask(a);

}

function deleteTask(event){
    let remove = event.target.parentNode;
    let parentNode = remove.parentNode;
    remove.parentNode.remove();
    event.stopPropagation();
    
}
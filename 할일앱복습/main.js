let taskInput=document.getElementById("task-input");
let addButton=document.getElementById("add-button");
let taskList=[]
let mode='all'
let filterList=[]
let tabs = document.querySelectorAll(".task-tabs div")
addButton.addEventListener("click",addTask)

for(let i=0; i<tabs.length; i++){
    tabs[i].addEventListener("click",function(event) {filter(event)})
}
console.log(tabs)
function addTask(){
 let task = {
        id: RandomId(),
        taskContent: taskInput.value,
        isComplete:false,
    }
    taskList.push(task);
    console.log(taskList)
    render()
}

function render(){
    let list=[]
    if(mode == "all"){
        list= taskList
    }else if(mode == "ongoing" || mode == "done"){
        list = filterList
    }
    let resultHtml='';
    for(let i =0; i<list.length; i++){
        if(list[i].isComplete == true){
            resultHtml+=` <div class="task">
            <div class="task-done">${list[i].taskContent}</div>
            <div>
            <button onclick="toggleComplete('${list[i].id}')">check</button>
            <button onclick="deleteTask('${list[i].id}')">Delete</button>
        </div>
        </div>`;
        }else{  resultHtml +=` <div class="task">
        <div>${list[i].taskContent}</div>
        <div>
        <button onclick="toggleComplete('${list[i].id}')">check</button>
        <button onclick="deleteTask('${list[i].id}')">Delete</button>
    </div>
    </div>`;
    }}

    document.getElementById("task-board").innerHTML =  resultHtml;
}

function toggleComplete(id){
    for(let i =0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render()
    console.log(taskList)
}
function deleteTask(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1)
            break;
        }
       
    }
    render()
}
function filter(event){
    mode=event.target.id;
   filterList=[];
    if(mode == "all"){
        render()
    }else if(mode == "ongoing"){
        for(let i =0; i<taskList.length; i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i]);
            }
        } render();
    }else if(mode == "done"){
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete == true){
                filterList.push(taskList[i])
            }
        }
        render();
    }
   
}



function RandomId () {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }
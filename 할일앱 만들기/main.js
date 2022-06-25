//유저가 값을 입력
//+ 버튼 클릭하면,할일이 추가된다
//delete 버튼을 누르면 할일이 삭제된다
//check 버튼을 누르면 할일이 끝나면서 밑줄이 간다 
//진핸중 끝남 탭을 누르면.언더바가 이동한다. 
//끝남탭은.끝난 아이템만,진행중탭은 진행중인 아이템만 나오게 된다 
//전체탭을 누르면 다시 전체아이템으로 돌아옴 
//1,check 버튼을 클릭하는 순간 true false 
//2.true이면 끝난걸로 간주하고 밑줄 보여주기 
//3.flase 이면 안끝난걸로 간주하고 그대로 


let taskInput = document.getElementById("task-input")
console.log(taskInput)
let addButton = document.getElementById("add-button")
let taskList =[]
addButton.addEventListener('click',add)


//버튼 실행시 실행될 함수 할일 추가 벨류에 값을 배열 테스크 리스트에 넣어야함 
function add(){
    let task = {
        id:randomIDGenerate(),
        taskOne:taskInput.value,
        isComplete:false
    };
    taskList.push(task)
    console.log(taskList)
    render()
}

function render(){
    let resultHtml = ''
    for(let i=0; i<taskList.length;i++){
        if(taskList[i].isComplete == true){
            resultHtml +=`<div class="task">
            <div class="taskDone">${taskList[i].taskOne}</div> 
             <div>
             <button onclick="toggleComplete('${taskList[i].id}')">check</button>
             <button>delete</button>
         </div>
         </div>
     </div>`;
        } else{ resultHtml +=`<div class="task">
        <div>${taskList[i].taskOne}</div> 
         <div>
         <button onclick="toggleComplete('${taskList[i].id}')">check</button>
         <button>delete</button>
     </div>
     </div>
 </div>`;
        }
    }
    document.getElementById("task-board").innerHTML=resultHtml;
}

function toggleComplete(id){
    
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id == id){
             taskList[i].isComplete = !taskList[i].isComplete;
             break
        }
    }
    render()
    console.log(taskList)

}
function randomIDGenerate(){
    return '_'+ Math.random().toString(36).substring(2,9);
}
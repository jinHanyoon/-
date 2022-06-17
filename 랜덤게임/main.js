let computerNum = 0
let playButton =document.getElementById("play-button")
console.log("playButton")
let userInput = document.getElementById("user-input")
let resultZone = document.getElementById("zone")
let resetPlay = document.getElementById("reset_button")
let chances = 5
let gameOver = false
let chanceArea=document.getElementById("chance-area")
let history =[]


playButton.addEventListener("click",play)
resetPlay.addEventListener("click",reset)
userInput.addEventListener("focus",function(){
    userInput.value="";
})

function pickRandomNum(){
computerNum =Math.floor(Math.random()*100)+1;
console.log("정답",computerNum)
}


function play(){
   let userValue = userInput.value


   if(userValue<1||userValue>100){
    resultZone.textContent="1과 100사이 숫자를 입력해 주세요"
    return;
   }
   if(history.includes(userValue)){
    resultZone.textContent="이미 입력한 숫자입니다 다른 숫자를 입력해 주세요 "
    return;
   }

   chances --;
   chanceArea.textContent=`남은기회:${chances}번`;
   console.log("chance",chances)
   if(userValue < computerNum){
       resultZone.textContent = "UP!!!"
     
   }else if(userValue>computerNum){
           
           resultZone.textContent = "down!!!"
       }else {
          
           resultZone.textContent = "맞추셨습니다"
           gameOver=true;
       }

       history.push(userValue)
       console.log(history)

       if(chances < 1){
        gameOver = true;
       }
       if(gameOver == true){
        playButton.disabled = true;
       }
   }

   function reset(){
    //user input 창이 깨끗하게 정리 
    userInput.value = ""
    //새로운 번호가 생성 
    pickRandomNum();
    resultZone.textContent="결과값이 여기 나옵니다"


   }
pickRandomNum();

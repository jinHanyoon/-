
let play_button = document.getElementById("gogo")
console.log("버튼이빈다")
let hob = document.getElementById("job")

play_button.addEventListener("click",wow)
/////////////빵션/////////////
function wow(){
    let job_value = hob.value
    if(job_value <10){
        gogo.textContent ="서여이는 바보";

    }
else
    gogo.textContent="진한이는 멍청이";

}
/////////////빵션///////////////





function regist (){
    alert(document.getElementById("name").value);
    alert(document.getElementById("city").value);
  }
  function change_city(){
      let city = document.getElementById("city").value;
      document.getElementById("region_02").style.display="none";
      document.getElementById("region_01").style.display="none";
      document.getElementById("region_03").style.display="none";

      document.getElementById("region_"+city).style.display="";
  }

  function bbk(){
      document.getElementById("email").style.backgroundColor = 'green';
   
     
  }
  function nnnn (){
      document.getElementById("email_color").style.backgroundColor = 'white';
      document.getElementById("email").style.backgroundColor='red'
  }
let info_button = document.getElementById("info")
let information = document.getElementById("infor")
info_button.addEventListener("click",fon0)
let resultzone = document.getElementById("zone")


function fon0 (){
   alert(document.getElementById("infor").value)
  
 }
 

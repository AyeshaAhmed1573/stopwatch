var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;
function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec
        msec =0;
    }else if( sec >= 60){
    min++
    sec = 0
    minHeading.innerHTML = min
    sec=0
}
}
function start(){

interval = setInterval(timer,10)


//    if(interval=1){{
//     clearInterval(interval)
//     }
// }
}
function stop(){
    clearInterval(interval)
    }
    function reset(){
        {
            clearInterval(interval)
            }
       
        min= 0;
        sec = 0;
        msec = 0;
        minHeading.innerHTML= min
        secHeading.innerHTML = sec
        msecHeading.innerHTML = msec
      
        }
        function myFunction() {
            document.getElementById("myBtn").disabled = true;
          }
        
          
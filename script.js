
var seconds=0;
var tens = 0;
// var minute = 0;
// var minuteAppend = document.getElementById('minute');
var secondsAppend = document.getElementById('seconds');
var tensAppend = document.getElementById('tens');
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var interVal;

buttonStart.onclick = function (){
    interVal = setInterval(timer,100);
}

buttonStop.onclick = function (){
    interVal = clearInterval(interVal);
}

buttonReset.onclick = function(){
    tens = 0;
    seconds = 0;
    tensAppend.innerHTML = '0'+ tens;
    secondsAppend.innerHTML = '0' + seconds;

}
  function timer(){
    tens++;
    tensAppend.innerHTML = tens;

    if(tens>9){
        seconds++;
        secondsAppend.innerHTML = seconds;
        tens=0; 
    }
   

  }


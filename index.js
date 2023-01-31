var seconds = 00;
var pulses = 00;
var appendPulses = document.getElementById('pulses');
var appendSeconds = document.getElementById('seconds');
var buttonStart = document.getElementById('start-button');
var buttonStop = document.getElementById('stop-button');
var buttonReset = document.getElementById('reset-button');

var interval ; //store timer's value

// when start button hit
function startTimer(){ 
    pulses++;
    if(pulses < 9){
        appendPulses.innerHTML = "0" + pulses;
    }
    if(pulses > 9){
        appendPulses.innerHTML = pulses;
    }
    if(pulses == 100){  
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        pulses = 0;
        appendPulses.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
    // setTimeout(startTimer, 100000)
}

buttonStart.onclick = function(){
    interval = setInterval(startTimer, 10);
    buttonStart.disabled = true;  //so that button don't do action again n again...
}

buttonStop.onclick = function(){
    clearInterval(interval);
    buttonStart.disabled = false; //enable start to resume...
}

buttonReset.onclick = function(){
    buttonStart.disabled = false; //enable button so that action could resume...
    clearInterval(interval);
    pulses = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendPulses.innerHTML = pulses;

}
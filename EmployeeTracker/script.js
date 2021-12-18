let [seconds, minutes, hours] = [0,0,0];
let userIdSection = document.querySelector("#user-id");
let userTimeSection = document.querySelector("#user-time");
let int;
let timeStarted = new Boolean(false);

//User info to display
let _userName  = localStorage.getItem("Karat");

userIdSection.innerHTML = _userName;
console.log(_userName);

/*
//Start time
document.getElementById("startTimer").addEventListener("click", ()=> {
    int = setInterval(displayTimer, 1000);
    timeStarted = true;
});

//Stop time
document.getElementById("stopTimer").addEventListener("click", ()=> {
    clearInterval(int);
    timeStarted = false; 
});

//Reset time
document.getElementById("resetTimer").addEventListener("click", ()=> {
    clearInterval(int);
    [seconds, minutes, hours] = [0, 0, 0];
    timerRef.innerHTML = "00 : 00 : 00";
}); */

//Log out - back to front page
document.getElementById("logout").addEventListener("click", ()=> {
    window.location.replace("login.html");
});


/*
function displayTimer(){
    seconds += 1;
    console.log(timeStarted);

    if(seconds == 60){
        minutes++;
        seconds = 0;

        if(minutes == 60){
            hours++;
            minutes = 0;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timerRef.innerHTML = `${h} : ${m} : ${s}`; 
} */

//Notication texts
const notification = document.getElementById("notification");
let succes = "Succes";
let fail = "fail";

//LOGIN - PASSWORD CHECKER
function login()
{
    inputPassword = document.getElementById("inputField").value;
    //Loop through passwords
    for (i = 0; i < users.length; i++) 
    {
        if(inputPassword == users[i].password){

            //Succes text notification
            notification.style.color = "green";
            notification.innerHTML = succes;

            //Go to index.html page
            window.location.replace("index.html"); 
        }
    }
};
 
  
//Get timestamp
function timeCheckIn(_userNameID){

    const d = new Date();

    // For todays date;
    Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+
    (((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
    }

    // For the time now - get the time now
    Date.prototype.timeNow = function () {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ 
    ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ 
    ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
    }

    //Add date + time
    userTime = (d.today() + " - " + d.timeNow());
    saveUser = _userNameID + " - " + userTime;
    console.log(saveUser);

}

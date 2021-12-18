//Notication
const notification = document.getElementById("notification");
//Notication texts
let succes = "Succes";
let fail = "fail";

//Store passwords form json to this global array
let users = [];

//JSON DB Employees
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        var response = JSON.parse(this.responseText);
        var employees = response.employee;
        
        //Loop trough jsonDB
        for (i = 0; i < employees.length; i++) {
            
            const _employee = employees[i]; //Save the employee to variable
            users.push(_employee); //Push employee to users array
        }
    }
};
xmlhttp.open("GET", "employees.json", true);
xmlhttp.send();

let get_userName;

//LOGIN - PASSWORD CHECKER
function login()
{
    inputPassword = document.getElementById("inputField").value;

    //Loop through passwords
    for (i = 0; i < users.length; i++) 
    {
        if(inputPassword == users[i].password){
            get_userName = users[i].userName;
            localStorage.setItem("id", timeCheckIn(get_userName));

            //Succes text notification
            notification.style.color = "green";
            notification.innerHTML = succes;

            //Go to index.html page
            window.location.replace("index.html"); 
        }
    }
};
 
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

}

/*
function showLoader(){
    var loaderIcon = document.getElementById("loader");
    loaderIcon.style.display = "block";
    console.log("Loader!");
}
showLoader();
*/

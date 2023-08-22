//Retrieve data from session storage
const storedname = localStorage.getItem("full-name");
var nameColomn = document.getElementById("nameColomn");
nameColomn.innerHTML = storedname;

const storedemail = localStorage.getItem("email");
var emailColomn = document.getElementById("emailColomn");
emailColomn.innerHTML = storedemail;

const storedphone = localStorage.getItem("phone");
var phoneColomn = document.getElementById("phoneColomn");
phoneColomn.innerHTML = storedphone;


// const selectedDate = localStorage.getItem("selectedDate");
const storeddate = localStorage.getItem("selectedDate");
var dateColomn = document.getElementById("dateColomn");
dateColomn.innerHTML = storeddate;

// const selectedDuration = localStorage.getItem("selectedDuration");
const storedduration = localStorage.getItem("hourStart") + " - " + localStorage.getItem("hourEnd");
var durationColomn = document.getElementById("durationColomn");
durationColomn.innerHTML = storedduration;


// const storedtotal = localStorage.getItem("total");
const storedtotal = localStorage.getItem("total");
var TotalpayColomn = document.getElementById("TotalpayColomn");
TotalpayColomn.innerHTML = storedtotal; 



//Function to only input numbers in the phone number field 
function isInputNumber(evt){
var ch = String.fromCharCode(evt.which);
if(!(/[0-9]/.test(ch))){
evt.preventDefault();
}
}


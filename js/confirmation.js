
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


const storedgender = localStorage.getItem("gender");
var genderColomn1 = document.getElementById("genderColomn");
genderColomn1.innerHTML = storedgender;


// const selectedDate = localStorage.getItem("selectedDate");
const storeddate = localStorage.getItem("selectedDate");
var dateColomn = document.getElementById("dateColomn");
dateColomn.innerHTML = storeddate;

// const selectedDuration = localStorage.getItem("selectedDuration");
const storedduration = localStorage.getItem("hourStart") + " - " + localStorage.getItem("hourEnd");
var durationColomn = document.getElementById("durationColomn");
durationColomn.innerHTML = storedduration;

//const storedtotal = localStorage.getItem("total");
const storedtotal = localStorage.getItem("total");
var TotalpayColomn1 = document.getElementById("TotalpayColomn");
TotalpayColomn1.innerHTML = storedtotal; 



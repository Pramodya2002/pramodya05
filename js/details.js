//Retreive data from details HTML page
function storetableToSession() {

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm-email').value;
    const phone = document.getElementById('phone').value;
    const gender =document.getElementById('gender').value;

//     // Store the values in session storage
       localStorage.setItem('full-name', fullName);
       localStorage.setItem('email', email);
       localStorage.setItem('confirm-email', confirmEmail);
       localStorage.setItem('phone', phone);
       localStorage.setItem('gender', gender);
}



//Retrieve data from local storage
// const selectedDate = localStorage.getItem("selectedDate");
const storeddate = localStorage.getItem("selectedDate");
var dateColomn = document.getElementById("dateColomn");
dateColomn.innerHTML = storeddate;

// const selectedDuration = localStorage.getItem("selectedDuration");
const storedduration = localStorage.getItem("hourStart") + " - " + localStorage.getItem("hourEnd");
var durationColomn = document.getElementById("durationColomn");
durationColomn.innerHTML = storedduration;

const storedticketType = localStorage.getItem("ticketType");
var ticketType= document.getElementById("ticketType");
ticketType.innerHTML = storedticketType;


// const storedtotal = localStorage.getItem("total");
const storedtotal = localStorage.getItem("total");
var TotalpayColomn = document.getElementById("TotalpayColomn");
TotalpayColomn.innerHTML = storedtotal;




// Add event listener to the "Continue with Purchase" button
const continueBtn02 = document.getElementById('ContinueBtn02');
continueBtn02.addEventListener('click', storetableToSession);










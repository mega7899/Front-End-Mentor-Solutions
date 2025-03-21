const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const complain = document.getElementById("message-field");
const submit = document.getElementById("submit-btn");
const generalQuery = document.getElementById("general");
const supportQuery = document.getElementById("support");
const consentBox = document.getElementById("consent");
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const fullreport = {};

submit.addEventListener("click", function() {
    infoChecker();
})

function infoChecker() {
    if(firstName.value && lastName.value && regex.test(email.value)) {
        boxChecker();
    } else {
        alert("Fill out the form!");
    }
}

function boxChecker() {
    if (generalQuery.checked && consentBox.checked) {
        completeReport() 
        alert("Thank You For Selecting General Enquiry We Will Reply to you later");
        alert("Congrats For Filling the form!")
    } else if (supportQuery.checked && consentBox.checked) {
        completeReport() 
        alert("Thank You For Selecting Support Request We Will Reply to you later");
        alert("Congrats For Filling the form!")
    } else if (consentBox.checked) {
        console.log("choose between the two different query!")
    }
}

function completeReport() {
    const complaint = complain.value;
    fullreport.firstName = firstName.value;
    fullreport.lastName = lastName.value;
    fullreport.email = email.value;
    fullreport.feedback = complaint;
    localStorage.setItem("fullComplait", JSON.stringify(fullreport))
    console.log(fullreport);
}

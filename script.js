const registration = document.getElementById("register-registrationForm");

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("firstname").value;
    const email =document.getElementById("firstname").value;
    const password = document.getElementById("firstname").value;
    const confirmPassword = document.getElementById("firstname").value;

    // Check if any field is empty
    function registration(){
        var a=0;
    if (firstname === "" || lastname === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields must be filled out");
        a=1;
    }

    // Check if the password and confirmPassword match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        a=2;
    }
    if(a=0){
        alert("Registration Successful. Check your email for next step")
    }

}
console.log("hey");





//Incompleted
//Incompleted
//Incompleted
//Incompleted
//Incompleted
//Incompleted

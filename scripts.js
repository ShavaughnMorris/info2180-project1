/* Add your JavaScript to this file */

window.onload = (event) => {
  	let submit = document.querySelector("form button");

    submit.addEventListener("click", e =>{
        e.preventDefault();
        let email = document.getElementById("email").value;
        let msg = document.getElementsByClassName("message")[0];
        if (email == "") {
            
            msg.innerText = "Please enter your email address.";     
        }
        else{
        	console.log(email);
            msg.innerText = "Thank you! Your email address " + email+ " has been added to our mailing list!";     

        }

    });



};

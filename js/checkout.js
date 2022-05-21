// Exercise 6

// Get the input fields
let fName = document.getElementById("fName");
let fEmail = document.getElementById("fEmail");
let fPassword = document.getElementById("fPassword");
let fAddress = document.getElementById("fAddress");
let fLastName = document.getElementById("fLastName");
let fPhone = document.getElementById("fPhone");


// {Regexes for validate form: Email, phone number, name and password>;
let checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let checkPhone = /^[0-9]+$/;
let checkName = /^[A-Za-z]+$/;
let checkPassword = /^[0-9a-zA-Z]+$/;
//  Regexes}


var form = document.getElementById("form");
form.addEventListener("submit", validate);


function validate(event) {

	let error = 0;

	// Validate fields entered by the user: name, phone, password, and email
	if (!checkName.test(fName.value)) {
		error++;
		fName.classList.add("is-invalid");
	} else {
		fName.classList.remove("is-invalid")
		fName.classList.add("is-valid");
	}
	if (!checkEmail.test(fEmail.value)) {
		error++;
		fEmail.classList.add("is-invalid");
	} else {
		fEmail.classList.add("is-valid");
	}
	if (!checkPhone.test(fPhone.value)) {
		error++;
		fPhone.classList.add("is-invalid");
	} else {
		fPhone.classList.add("is-valid");
	}
	if (!checkPassword.test(fPassword.value)) {
		error++;
		fPassword.classList.add("is-invalid");
	} else {
		fPassword.classList.add("is-valid");
	}

	if (error > 0) {
		event.preventDefault();
	}
}


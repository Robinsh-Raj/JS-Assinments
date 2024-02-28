import interactWithServer from "./connectServer.js";
var ele_username = document.getElementById("username");
var ele_email = document.getElementById("email");
var ele_password = document.getElementById("password");
var ele_confirm_password = document.getElementById("confirmpassword");
var form = document.getElementById("signup");
var ele_success = document.getElementById("success");
function checkUsername() {
var flagValid = false;
var min = 3,
max = 25;
var username = ele_username.value.trim();
if (!isRequired(username)) {
showError(ele_username, "Username cannot be blank.");
 } else if (!isBetween(username.length, min, max)) {
showError(
ele_username,
`Username must be between ${min} and ${max} characters.`
 );
 } else {
showSuccess(ele_username);
flagValid = true;
 }
return flagValid;
}
function checkEmail() {
var flagValid = false;
var email = ele_email.value.trim();
if (!isRequired(email)) {
    showError(ele_email, "Email cannot be blank.");
     } else if (!isEmailflagValid(email)) {
    showError(ele_email, "Email is not valid.");
     } else {
    showSuccess(ele_email);
    flagValid = true;
     }
    return flagValid;
    }
    function checkPassword() {
    var flagValid = false;
    var password = ele_password.value.trim();
    if (!isRequired(password)) {
    showError(ele_password, "Password cannot be blank.");
     } else if (!isPasswordSecure(password)) {
    showError(
    ele_password,
    "Password must have at least 8 characters that with 1 uppercase character, 1 digit and 1 special character (!@#$%^&*)"
     );
     } else {
    showSuccess(ele_password);
    flagValid = true;
     }
    return flagValid;
    }
    function checkConfirmPassword() {
    var flagValid = false;
    // check confirm password
    var confirmPassword = ele_confirm_password.value.trim();
    var password = ele_password.value.trim();
    if (!isRequired(confirmPassword)) {
    showError(ele_confirm_password, "Please enter the password again");
} else if (password !== confirmPassword) {
    showError(ele_confirm_password, "The password does not match");
     } else {
    showSuccess(ele_confirm_password);
    flagValid = true;
     }
    return flagValid;
    }
    function isEmailflagValid(email) {
    var re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(
    (\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-
    9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
    function isPasswordSecure(password) {
    var re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
     );
    return re.test(password);
    }
    var isRequired = (value) => (value === "" ? false : true);
    var isBetween = (length, min, max) =>
    length < min || length > max ? false : true;
    function showError(input, message) {
    // get the form-field element
    var formField = input.parentElement;
    // add the error class
    formField.classList.remove("success");
    formField.classList.add("error");
    // show the error message
    var error = formField.querySelector("small");
    error.textContent = message;
    }
    function showSuccess(input) {
        // get the form-field element
        var formField = input.parentElement;
        // remove the error class
        formField.classList.remove("error");
        formField.classList.add("success");
        // hide the error message
        var error = formField.querySelector("small");
        error.textContent = "";
        }
        form.addEventListener("submit", function (e) {
        // prevent the form from submitting
        e.preventDefault();
        var isFormValid =
        checkUsername() &&
        checkEmail() &&
        checkPassword() &&
        checkConfirmPassword();
        // isEmailValid && isPasswordValid && isConfirmPasswordValid;
        // submit to the server if the form is valid
        if (isFormValid) {
        // get object containing all form data
        var obj = getObject();
        // send ajax post request to server
        interactWithServer(
        "post",
        "http://localhost:3000/users",
        obj,
         (data, err) => {
        if (err) {
         } else {
        console.log("success");
        ele_success.classList.toggle("hide");
        form.classList.toggle("hide");
         }
         }
         );
        } else {
        }
       });
       function getObject() {
       var obj = {};
       obj.username = ele_username.value;
       obj.email = ele_email.value;
       obj.password = ele_password.value;
       return obj;
       }
       form.addEventListener("input", function (e) {
       switch (e.target.id) {
       case "username":
       checkUsername();
       break;
       case "email":
       checkEmail();
       break;
       case "password":
       checkPassword();
       break;
       case "confirm-password":
       checkConfirmPassword();
       break;
        } //switch
       });
       {
        "students": [
         {
        "id": 9,
        "rollno": "23",
        "name": "Neelam",
        "marks": 19.2
         },
         {
            "id": 11,
            "rollno": "27",
            "name": "Sarika",
            "marks": 64.2
             },
             {
            "id": 12,
            "rollno": "29",
            "name": "Rohan",
            "marks": 45.5
             },
             {
            "rollno": "30",
            "name": "Bhimsen",
            "marks": "85.6",
            "id": 13
             },
             {
            "rollno": "30",
            "name": "Gajanan",
            "marks": "85.6",
            "id": 15
             },
             {
            "rollno": "30",
            "name": "Parag",
            "marks": "85.6",
            "id": 16
             },
             {
            "rollno": "30",
            "name": "Vikash",
            "marks": "85.6",
            "id": 17
            },
             {
            "rollno": "30",
            "name": "Shankar",
            "marks": "85.6",
            "id": 18
             },
             {
            "rollno": 30,
            "name": "Suresh",
            "marks": 85.6,
            "id": 19
             },
             {
            "rollno": "10",
            "name": "Meera",
            "marks": "40",
            "id": 20
             },
             {
                "rollno": "10",
                "name": "Nayan",
                "marks": "40",
                "id": 21
                 },
                 {
                "rollno": "18",
                "name": "Robince",
                "marks": "56.32",
                "id": 22
                 }
                 ]
                "users": [
                 {
                 }
                ]
            }                                                                
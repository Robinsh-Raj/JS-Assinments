function validateForm() { 
    const name = document.getElementById('name').value; 
    const mobile = document.getElementById('mobile').value; 
    const email = document.getElementById('email').value; 
    const errorMessages = document.getElementById('errorMessages'); 
    
    errorMessages.innerHTML = ''; // Clear any previous error messages. 
    // Validation for correct name (only letters and spaces). 
    if (!/^[A-Za-z\s]+$/.test(name)) { 
    errorMessages.innerHTML += "Invalid name. Please enter a valid name.<br>"; 
    return false; 
    } 
    // Validation for a valid mobile number. 
    if (!/^\d{10}$/.test(mobile)) { 
    errorMessages.innerHTML += "Invalid mobile number. Please enter a 10-digit number.<br>"; 
    return false; 
    } 
    // Validation for a valid email address. 
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { 
    errorMessages.innerHTML += "Invalid email address. Please enter a valid email.<br>"; 
    return false; 
    } 
    // If all validations pass, the form will be submitted. 
    return true; 
   }
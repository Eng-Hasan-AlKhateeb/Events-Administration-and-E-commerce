document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Reset error messages
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Get form values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validate email
    if (!isValidEmail(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address";
      return;
    }

    // Validate password
    if (!isValidPassword(password)) {
      document.getElementById("passwordError").textContent =
        "Please enter a valid password (min. 8 characters)";
      return;
    }

    // Form is valid, do further processing
    // For example, you can submit the form to a server here

    console.log("Form submitted successfully!");
  });

  // Email validation function
  function isValidEmail(email) {
    // A simple regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Password validation function
  function isValidPassword(password) {
    return password.length >= 8;
  }
});

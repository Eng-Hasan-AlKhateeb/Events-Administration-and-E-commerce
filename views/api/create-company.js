document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("btn-register-company")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const companyName = document.getElementById("company-name").value;
      const origin = document.getElementById("origin").value;
      const branches = document.getElementById("branches").value;
      const accounts = document.getElementById("accounts").value;
      const desc = document.getElementById("desc").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const companyProfile = document.getElementById("company-profile").files[0];
     
      const dataToSend = {
        name: companyName,
        origin,
        branches,
        accounts,
        desc,
        email,
        password,
        images: companyProfile,
      };
      

      axios
        .post("http://localhost:3000/api/v1/companies", dataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log("Response:", response); // Log the complete response object
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
});

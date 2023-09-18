document.addEventListener("DOMContentLoaded", async () => {
  // Companies
  try {
    const response = await axios.get("http://localhost:3000/api/v1/users");
    const user = response.data.user;

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const userName = document.getElementById("user-name");
    const phoneNumber = document.getElementById("contact-number");
    const origin = document.getElementById("origin");
    const role = document.getElementById("role");
    const password = document.getElementById("password");

    firstName = user.firstName;
    lastName = user.lastName;
    email = user.email;
    userName = user.username;
    phoneNumber = user.phoneNumber;
    origin = user.origin;
    role = user.role;

    const html = user.reservations.map(
      (item) => `
      <li style="font-size: 20px;">${item.name}</li>
      `
    );

    document.getElementById("reservations").innerHTML = html;

  } catch (error) {
    console.error("Error:", error);
  }
});


document.addEventListener("DOMContentLoaded", async () => {
    // Companies
    try {
    
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const email = document.getElementById("email").value;
      const userName = document.getElementById("user-name").value;
      const phoneNumber = document.getElementById("contact-number").value;
      const origin = document.getElementById("origin").value;
      const role = document.getElementById("role").value;
      const password = document.getElementById("password").value;

      document.getElementById("btn-register").addEventListener("click", (event) => {
          console.log(event)
          event.preventDefault();
        axios.patch('"http://localhost:3000/api/v1/users', {
          firstName,
          lastName,
          email,
          userName,
          phoneNumber,
          origin,
          role,
          password,
        }, {
          headers: {
              'Content-Type': 'application/json',
          },
      });
      });
    } catch (error) {
      console.error("Error:", error);
    }
  });
  
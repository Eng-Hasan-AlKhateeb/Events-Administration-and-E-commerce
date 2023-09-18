document.addEventListener("DOMContentLoaded", async () => {
  try {

    let token=getCookie('Token');
    console.log(token);
    // ** Messages
    const messagesResponse = await axios.get(
      `http://localhost:3000/api/v1/messages`
    );

    const messages = messagesResponse.data.messages;

    document.getElementById('messages-body').innerHTML = messages.map(message => `
    <tr>
    <td class="product-subtotal text-center">
    <button type="button" class="btn btn-small" data-message-delete-id="${message._id}"> حذف الرسالة</button>
    </td>


    <td class="product-name" style="text-align: right;">
        <div class="item" dir="rtl" style="text-align: right;">
            <p style="font-size: 18px;">${message.content}</p>
            </div>
    </td>  </tr>
`)

document.addEventListener("click", (event) => {
  if (event.target.matches("[data-message-delete-id]")) {
    const id = event.target.getAttribute("data-message-delete-id");
    axios.delete(`http://localhost:3000/api/v1/messages/${id}`);
  }
});

    // ** Events
    const eventsResponse = await axios.get(
      `http://localhost:3000/api/v1/events`
    );
    const events = eventsResponse.data.events;

    document.getElementById("events-body").innerHTML = events.map(
      (event) => `
    <td class="product-subtotal text-center">
       <button id="delete-event" type="button" class="btn btn-small" data-event-delete-id="${event._id}"> حذف الحدث</button>
      <button type="button" class="btn btn-small" data-toggle="modal" data-target="#exampleModalCenter"
      data-event-edit-id="${event._id}"
      id="save-events-changes"
      > تعديل الحدث</button>
    </td>
    <td class="product-name" style="text-align: right;">
      <h1 class="no-margin">${event.name}</h1>
      <h2 class="h2">${event.instructor}</h2>
      <h2 class="h2"><span>${event.date}</span> <span>${event.time}</span> </h2>
      <h2 class="h2"><span>المدة :${event.duration}</span> <span>،الموقع:${event.location}</span></h2>
      <p>${event.desc}</p>  
    </td>
`
    );

    document.addEventListener("click", (event) => {
      if (event.target.matches("[ data-event-delete-id]")) {
        const id = event.target.getAttribute(" data-event-delete-id");
        document
          .getElementById("delete-event")
          .addEventListener("click", function () {
            axios.delete(`http://localhost:3000/api/v1/events/${id}`);
          });
      }
    });

    const eventData = {
      name: document.getElementById("event-name").value,
      location: document.getElementById("event-location").value,
      date: document.getElementById("event-date").value,
      time: document.getElementById("event-time").value,
      desc: document.getElementById("event-content").value,
      instructor: document.getElementById("doctor-name").value,
      duration: document.getElementById("event-duration").value,
    };

    document
      .getElementById("create-event")
      .addEventListener("click", function () {
        axios.post(`http://localhost:3000/api/v1/events`, eventData, {
          headers: {
            "Content-Type": "application/json",
           " authorization" : `Bearer ${token}`
          },
        });
      });

    document.addEventListener("click", (event) => {
      if (event.target.matches("[data-event-edit-id]")) {
        const id = event.target.getAttribute("data-event-edit-id");
        document
          .getElementById("save-events-changes")
          .addEventListener("click", function () {
            axios.patch(
              `http://localhost:3000/api/v1/events/${id}`,
              eventData,
              {
                headers: {
                  "Content-Type": "application/json",
                  " authorization" : `Bearer ${token}`
                },
              }
            );
          });
      }
    });


    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }
    // ** Companies
    const response = await axios.get(`http://localhost:3000/api/v1/companies`);

    const companies = response.data.companies;

    const companiesTableBody = document.getElementById("companies-body");

    companiesTableBody.innerHTML = companies.map((company) => {
      return `
        <tr>
          <td class="product-subtotal text-center">
            <button type="button" class="btn btn-small" data-company-id="${company._id}">قبول الشركة</button>
            <button type="button" class="btn btn-small" data-company-reject-id="${company._id}">عدم قبول الشركة</button>
          </td>
          <td class="product-name" style="text-align: right;">
            <h1 class="no-margin">${company.name}</h1>
            <h2 class="h2">${company.desc}</h2>
            <h2 class="h2"><span>${company.origin}</span> <span>،حلب</span> </h2>
          </td>
        </tr>
      `;
    });

    document.addEventListener("click", (event) => {
      if (event.target.matches("[data-company-id]")) {
        const companyId = event.target.getAttribute("data-company-id");
        axios.post(`http://localhost:3000/api/v1/companies/${companyId}`);
      }
    });

    document.addEventListener("click", (event) => {
      if (event.target.matches("[data-company-reject-id]")) {
        const companyId = event.target.getAttribute("data-company-reject-id");
        axios.delete(`http://localhost:3000/api/v1/companies/${companyId}`);
      }
    });

    // ** Statistics
    const statisticsResponse = await axios.get(
      `http://localhost:3000/api/v1/statistics`
    );

    const statistics = statisticsResponse.data.statistics;

    document.getElementById("statistics-body").innerHTML = statistics.map(
      (statistic) => `
    <tr>
        <td class="product-subtotal text-center"><button type="button" class="btn btn-small" data-statistic-delete-id="${statistics._id}"> حذف الاحصائية</button>
          <button type="button" class="btn btn-small" data-toggle="modal" data-target="#exampleModalCenter1" data-statistic-edit-id="${statistics._id}"> تعديل الاحصائية</button>
        </td>
        <td class="product-name" style="text-align: right;">
          <div class="item" dir="rtl" style="text-align: right;">
            <h2 class="number">${statistic.value}</h2>
            <h3 class="stats-sub-heading">${statistic.name}</h3>
            <p>${statistic.desc}</p>
          </div>
        </td>
    </tr>
    `
    );

    document.addEventListener("click", (event) => {
      if (event.target.matches("[data-statistic-delete-id]")) {
        const id = event.target.getAttribute("data-statistic-delete-id");
        axios.delete(`http://localhost:3000/api/v1/statistics/${id}`);
      }
    });

    const statisticsValue = document.getElementById("statistics-value").value;
    const statisticsName = document.getElementById("statistics-name").value;
    const statisticsDesc = document.getElementById("statistics-desc").value;

    const statisticsData = {
      name: statisticsName,
      value: statisticsValue,
      desc: statisticsDesc,
    };

    document
      .getElementById("save-statics-changes")
      .addEventListener("click", function () {
        axios.post(`http://localhost:3000/api/v1/statistics`, statisticsData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      });

    document.addEventListener("click", (event) => {
      if (event.target.matches("[data-statistic-edit-id]")) {
        const id = event.target.getAttribute("data-statistic-edit-id");
        document
          .getElementById("save-statics-changes")
          .addEventListener("click", function () {
            axios.patch(
              `http://localhost:3000/api/v1/statistics/${id}`,
              statisticsData,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
          });
      }
    });

    // ** Comments
    const commentsResponse = await axios.get(
      `http://localhost:3000/api/v1/comments`
    );

    const comments = commentsResponse.data.comments;

    document.getElementById("comments-body").innerHTML = comments.map(
      (comment) => `
      <tr>
        <td class="product-subtotal text-center"><button type="button" class="btn btn-small" data-comments-delete-id="${comment._id}"> حذف التعليق</button></td>
        <td class="product-name" style="text-align: right;">
         <div class="friend" style="text-align: right;">
            <h3 style="font-size: 20px; font-weight: bold;">${comment.userID}</h3><span>${comment.time}</span><span>${comment.date}</span>
            <p style="font-size: 18px;">${comment.content}</p>
          </div>
        </td>
      </tr>
`
    );

    document.addEventListener("click", (event) => {
      if (event.target.matches("[data-comments-delete-id]")) {
        const id = event.target.getAttribute("data-comments-delete-id");
        axios.delete(`http://localhost:3000/api/v1/comments/${id}`);
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
});

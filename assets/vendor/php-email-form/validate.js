(function () {
  "use strict";

  let forms = document.querySelectorAll(".php-email-form");

  forms.forEach(function (e) {
    e.addEventListener("submit", function (event) {
      event.preventDefault();

      let thisForm = this;

      thisForm.querySelector(".loading").classList.add("d-block");
      thisForm.querySelector(".error-message").classList.remove("d-block");
      thisForm.querySelector(".sent-message").classList.remove("d-block");

      let formData = new FormData(thisForm);

      var params = {
        name: thisForm.name.value,
        email: thisForm.email.value,
        subject: thisForm.subject.value,
        message: thisForm.message.value,
      };

      sendMail(thisForm, formData, params);
    });
  });

  function sendMail(thisForm, formData, params) {
    const serviceID = "service_42xzlzr";
    const templateID = "template_vf4bz5g";
    console.log(params);
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        console.log(res);
        thisForm.querySelector(".loading").classList.remove("d-block");
        if (res.text == "OK") {
          thisForm.querySelector(".sent-message").classList.add("d-block");
          thisForm.reset();
        } else {
          displayError(thisForm, "error");
        }
      })
      .catch((err) => displayError(thisForm, err));
  }

  function displayError(thisForm, error) {
    thisForm.querySelector(".loading").classList.remove("d-block");
    thisForm.querySelector(".error-message").innerHTML = error;
    thisForm.querySelector(".error-message").classList.add("d-block");
  }
})();

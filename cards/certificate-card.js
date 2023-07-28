const container = document.getElementById("certificate-container");

fetch("data/certificate-data.json")
  .then((response) => response.json())
  .then((data) => {
    const returnCards = (data_val) => {
      return data_val.map(
        (val) =>
          `<div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div class="icon">
                <img src="/assets/certifacteLogos/${
                  val.logo
                }" class="logo">              
              </div>
              <h4 class="title"><a href="${val.credentialURL}">${
            val.title
          }</a></h4>
          ${
            val.description != ""
              ? `<p class="description">${val.description}</p>`
              : ``
          }

          ${
            val.issuedDate != ""
              ? `<p class="issuedDate">${val.issuedDate}</p>`
              : ``
          }

          ${
            val.credentialID != ""
              ? `<p class="credentialID">${val.credentialID}</p>`
              : ``
          }
             
             
             
              ${
                val.credentialURL != ""
                  ? `<a target="_blank"  href="${val.credentialURL}" class="btn btn-outline-secondary" >Show Credential <i class="fa fa-external-link"></i></i></a>`
                  : ``
              }
             
            </div>`
      );
    };

    container.innerHTML = returnCards(data).join("");
  });

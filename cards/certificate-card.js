const container = document.getElementById("certificate-container");

fetch("data/certificate-data.json")
  .then((response) => response.json())
  .then((data) => {
    const returnCards = (data_val) => {
      return data_val.map(
        (val) =>
          `<div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div class="icon">
                <img src="/assets/certifacteLogos/${val.logo}" class="logo">              
              </div>
              <h4 class="title"><a href="">${val.title}</a></h4>
              <p class="description"></p>
              <p class="issuedDate">${val.issuedDate}</p>
              <p class="credentialID">${val.credentialID}</p>
              <a target="_blank"  href="${val.credentialURL}" class="btn btn-outline-secondary" >Show Credential <i class="fa fa-external-link"></i></i></a>
            </div>`
      );
    };

    container.innerHTML = returnCards(data).join("");
  });

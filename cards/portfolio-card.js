const portfolioContainer = document.getElementById("portfolio-container");

const returnPortfolioCard = (data_val) => {
  return data_val.map(
    (val) =>
      `<div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <div class="portfolio-wrap">
        <a href="portfolio-details.html?id=${val.id}">
          <img
            src="${val.cardImage}"
            class="img-fluid"
            alt=""
          />
        </a>

       
      </div>
    </div>`
  );
};

fetch("data/portfolio-data.json")
  .then((response) => response.json())
  .then((data) => {
    portfolioContainer.innerHTML = returnPortfolioCard(data).join("");
  });

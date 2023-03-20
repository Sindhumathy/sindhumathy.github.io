const urlParams = new URLSearchParams(window.location.search);
const greetingValue = urlParams.get("id");
const bannerContainer = document.getElementById("banner");
const goalsContainer = document.getElementById("goals-container");
const approachContainer = document.getElementById("approach");
const strategiesContainer = document.getElementById("strategies-used");
const resultsContainer = document.getElementById("results-container");

console.log(greetingValue, 777777777777777);

/// banner images
const returnBanner = (data_val) => {
  return data_val.map(
    (val) =>
      `<div class="swiper-slide">
      <img
        src="${val}"
        alt=""
      />
    </div>`
  );
};

///
const goalsCard = (data_val) => {
  return data_val.map(
    (val) =>
      `<div
      class="col-lg-4 col-md-6 d-md-flex align-items-md-stretch"
      data-aos="fade-up"
    >
      <div class="count-box">
        <i class="${val.iconName}"></i>                
        <p>${val.goal}</p>
      </div>
    </div>`
  );
};

///
const bulletList = (data_val) => {
  return data_val.map((val) => `<li>${val}</li>`);
};

///
const resultsCard = (data_val) => {
  return data_val.map(
    (val) =>
      `<div
      class="col-lg-4 col-md-6 d-md-flex align-items-md-stretch"
      data-aos="fade-up"
    >
      <div class="count-box">
        <i class="${val.iconName}"></i>
        <span>${val.value}</span>
        <p>${val.title}</p>
      </div>
    </div>`
  );
};

///

fetch("../../data/portfolio-data.json")
  .then((response) => response.json())
  .then((data) => {
    const title = data.find(
      (item) => item.id === parseInt(greetingValue)
    ).title;
    const logo = data.find((item) => item.id === parseInt(greetingValue)).logo;

    const bannerImages = data.find(
      (item) => item.id === parseInt(greetingValue)
    ).banner;
    const description = data.find(
      (item) => item.id === parseInt(greetingValue)
    ).description;

    const goals = data.find(
      (item) => item.id === parseInt(greetingValue)
    ).goals;

    const approach = data.find(
      (item) => item.id === parseInt(greetingValue)
    ).Approach;

    const strategiesUsed = data.find(
      (item) => item.id === parseInt(greetingValue)
    ).StrategiesUsed;

    const results = data.find(
      (item) => item.id === parseInt(greetingValue)
    ).Results;

    const note = data.find((item) => item.id === parseInt(greetingValue)).Note;

    console.log(bannerImages);

    bannerContainer.innerHTML = returnBanner(bannerImages).join("");
    document.getElementById("title").innerHTML = title;
    document.getElementById("logo-mage").src = logo;
    document.getElementById("description-text").innerHTML = description;
    goalsContainer.innerHTML = goalsCard(goals).join("");
    approachContainer.innerHTML = bulletList(approach).join("");
    strategiesContainer.innerHTML = bulletList(strategiesUsed).join("");
    resultsContainer.innerHTML = resultsCard(results).join("");
    document.getElementById("note-text").innerHTML = note;
  });

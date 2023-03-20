const urlParams = new URLSearchParams(window.location.search);
const greetingValue = urlParams.get("id");
const bannerContainer = document.getElementById("banner");
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

    console.log(bannerImages);

    bannerContainer.innerHTML = returnBanner(bannerImages).join("");
    document.getElementById("title").innerHTML = title;
    document.getElementById("logo-mage").src = logo;
  });

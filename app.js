const posters = document.querySelectorAll(".img-container > img");
const modal = document.querySelector(".modal");
const fullImg = document.querySelector(".full-img");
const smallImg = document.querySelector(".img-container > img");

function openImage() {
  posters.forEach((poster) => {
    poster.addEventListener("click", function (e) {
      let posterAlt = poster.getAttribute("alt");
      modal.classList.add("open");
      fullImg.classList.add("enlarge");
      fullImg.src = `/img/${posterAlt}.jpg`;
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("open");
        fullImg.classList.remove("enlarge");
      }
    });
  });
}

openImage();

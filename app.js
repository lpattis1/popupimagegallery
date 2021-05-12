const posters = document.querySelectorAll(".img-container > img");
const modal = document.querySelector(".modal");
const fullImg = document.querySelector(".full-img");
const gallery = document.querySelector(".gallery");
console.log(posters);

function openImage() {
  posters.forEach((poster, i) => {
    poster.addEventListener("click", function (e) {
      let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      let posterAlt = poster.getAttribute("alt");
      console.log(posterAlt);
      if (e.target) {
        modal.classList.add("open");
        fullImg.classList.add("enlarge");
        fullImg.src = `/img/${posterAlt}.jpg`;
      }

      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          modal.classList.remove("open");
          fullImg.classList.remove("enlarge");
        }
      });
    });
  });
}

openImage();

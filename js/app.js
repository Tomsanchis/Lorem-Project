const filtre = () => {
  const article = document.querySelectorAll("article");
  const favoris = document.querySelectorAll(".btn-favosris");
  const filtrefav = document.querySelector(".btn-fav");
  const filtreremove = document.querySelector(".btn-remove-filter");
  for (let i = 0; i < article.length; i++) {
    favoris[i].addEventListener("click", () => {
      article[i].classList.add("favoris");
    });
    filtrefav.addEventListener("click", () => {
      if (article[i].classList.contains("favoris")) {
        article[i].style.display = "block";
      } else {
        article[i].style.display = "none";
      }
    });
    filtreremove.addEventListener("click", () => {
      article[i].classList.remove("favoris");
      article[i].style.display = "block";
    });
  }
};

filtre();

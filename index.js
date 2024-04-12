document.addEventListener("DOMContentLoaded", function () {
  const divs = document.querySelectorAll(".question-container");
  divs.forEach((div) => {
    div.addEventListener("click", function () {
      const isExpanded =
        this.getAttribute("data-expanded") === "true" ? true : false;
      console.log("isExpanded", isExpanded);
      const parentDiv = this.parentNode;

      if (isExpanded) {
        this.setAttribute("data-expanded", "false");
        this.querySelector(".arrow").src = "assets/images/icon-plus.svg";
        parentDiv.querySelector(".answer").style.display = "none";
      } else {
        this.setAttribute("data-expanded", "true");
        this.querySelector(".arrow").src = "assets/images/icon-minus.svg";
        parentDiv.querySelector(".answer").style.display = "block";
      }
    });
  });
});

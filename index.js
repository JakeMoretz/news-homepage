const hamburger = document.querySelector(".mobile-toggle");
const primaryNav = document.querySelector(".navBtns");

hamburger.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible"); // get attribute

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        hamburger.style.backgroundImage = "url(./assets/images/close-icon.png)";
        hamburger.style.backgroundSize = "cover";
        hamburger.style.width = "50px";
        hamburger.style.height = "40px";
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        hamburger.style.backgroundImage = "url(./assets/images/hamburger.png)";
        hamburger.style.backgroundSize = "contain";
        hamburger.style.height = "30px";
        hamburger.style.width = "30px";
    }
});

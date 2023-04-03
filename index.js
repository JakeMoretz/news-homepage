const hamburger = document.querySelector(".mobile-toggle");
const primaryNav = document.querySelector(".navBtns");

hamburger.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible"); // get attribute

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
    }
});

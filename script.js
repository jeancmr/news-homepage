const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav-bar");
  const menuOverlay = document.querySelector(".menu-overlay");
  // const htmlEl = document.querySelector("html");
  // const bodyEl = document.querySelector("body");

  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");

    // toggle landscape
    menuOverlay.classList.toggle("active");

    //toggle to stop scrolling when burger is active
    htmlEl.classList.toggle("no-scroll");
    bodyEl.classList.toggle("no-scroll");
  });
};

navSlide();

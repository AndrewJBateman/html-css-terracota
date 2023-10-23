// make navbar background solid after scrolling down
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 180) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// Service Worker
navigator.serviceWorker.register("js/service_worker.min.js");

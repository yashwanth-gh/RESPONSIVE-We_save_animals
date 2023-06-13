// |__________________________------Hamberger-----________________________|

const hamberger_icon = document.querySelector(".hamburger-btn");
const navigation_header = document.querySelector(".navigation_panel");
const toggleNavigation = () => {
  navigation_header.classList.toggle("active");
};
hamberger_icon.addEventListener("click", () => toggleNavigation());

// |_______________________-----SCROLL TRANSFORM------______________________|

const change_navbar = () => {
  var scrollValue = window.scrollY;
  if (scrollValue < 710) {
    navigation_header.classList.remove("scrolled");
  } else {
    navigation_header.classList.add("scrolled");
  }
};
window.addEventListener("scroll", () => change_navbar());

// |_______________________-----intersection observer------______________________|

// let observer = new IntersectionObserver((entries, observer) => {
//   entries
//     .filter((e) => e.isIntersecting)
//     .forEach((entry) => {
//       entry.target.classList.add("scroll_animation");
//       observer.unobserve(entry.target);
//     });
// });

// document.querySelectorAll("p,img,h1,h2,section,div,footer,header").forEach((e) => {
//   observer.observe(e);
// });

// |_______________________-----Gallery------______________________|

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".picture_grid img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
preview.addEventListener("click", () => {
modal.classList.add("open");
original.classList.add("open");
//Dynamic change text and image
const originalSrc = preview.getAttribute("src");
original.src =originalSrc;
const altText = preview.alt;
caption.textContent = altText;
});
});

modal.addEventListener("click", (e) => {
if(e.target.classList.contains("modal")) {
modal.classList.remove("open");
original.classList.remove("open");
}
});

// //  ----------------------------------scroll down hide-------------------

// var prevScrollpos = window.scrollY;
// window.onscroll = function() {
//   var currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByTagName("header").style.top = "0";
//   } else {
//     document.getElementsByClassName("header").style.top = "-8rem";
//   }
//   prevScrollpos = currentScrollPos;
// }

// -------------------------------------------payment window ----------------------------------------

// const pay_window = document.querySelector(".modal");

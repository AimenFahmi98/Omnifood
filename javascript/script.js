const copyright = document.querySelector(".year");
copyright.textContent = `${new Date().getFullYear()}`;

const btnMobileNav = document.querySelector(".btn-mobile-nav");
const headerNav = document.querySelector(".header");

btnMobileNav.addEventListener("click", (e) => {
  headerNav.classList.toggle("nav-open");
});

/**************************************************************
 **  (Smartphones): Closing navigation when links are clicked
 **************************************************************/
const links = document.querySelectorAll("a:link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("main-nav-link")) {
      headerNav.classList.toggle("nav-open");
    }
  });
});

/**************************************************************
 **  Sticky navigation
 **************************************************************/
const sectionHero = document.querySelector(".section-hero");
const header = document.querySelector(".header");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      header.classList.add("sticky");
      sectionHero.style.marginTop = "9.6rem";
    } else {
      header.classList.remove("sticky");
      sectionHero.style.marginTop = "0rem";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-160px",
  }
);
obs.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
/////////////////////////////////////////////////////////////
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

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
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 4.8rem;
  }
  
  .no-flexbox-gap .list-item:not(:last-child) {
    margin-bottom: 1.6rem;
  }
  
  .no-flexbox-gap .list-icon:not(:last-child) {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .delivered-faces {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .meal-attribute:not(:last-child) {
    margin-bottom: 2rem;
  }
  
  .no-flexbox-gap .meal-icon {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .footer-row div:not(:last-child) {
    margin-right: 6.4rem;
  }
  
  .no-flexbox-gap .social-links li:not(:last-child) {
    margin-right: 2.4rem;
  }
  
  .no-flexbox-gap .footer-nav li:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  
  @media (max-width: 75em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 3.2rem;
    }
  }
  
  @media (max-width: 59em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 0;
      margin-bottom: 4.8rem;
    }
  }
  */

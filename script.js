/*  Swiper Slider Testimonial  */
var swiper = new Swiper(".testimonialSlider", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination.testimonial-pagination",
    clickable: true,
  },
});

/*  Swiper Slider Talented People  */
var swiper = new Swiper(".talentedPeople", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next.talented-people-button-next",
    prevEl: ".swiper-button-prev.talented-people-button-prev",
  },
});

/*  Tab Components   */
const tabsBtn = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content-box");

tabsBtn.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and tab content
    tabsBtn.forEach((tabBtn) => tabBtn.classList.remove("tab-btn-active"));
    tabContent.forEach((content) => {
      content.classList.remove("tab-content-box-active");
      content.classList.remove("tab-content-box-active-opacity");
    });

    // Add active class to the clicked tab
    tab.classList.add("tab-btn-active");

    // Show the corresponding tab content
    const tabId = tab.getAttribute("data-tab");
    const activeTabContent = document.getElementById(tabId);
    activeTabContent.classList.add("tab-content-box-active");
    setTimeout(() => {
      activeTabContent.classList.add("tab-content-box-active-opacity");
    }, 200);
  });
});

/*  Mobile Navbar   */
const navOpenBtn = document.querySelector(".navbar__hamburger-btn");
const navCloseBtn = document.querySelector(".navbar__close-btn");
const navMobileMenu = document.querySelector(".navbar__mobile");

if (navOpenBtn) {
  navOpenBtn.addEventListener("click", function () {
    navMobileMenu.classList.add("navbar__mobile-open");
  });
}

if (navCloseBtn) {
  navCloseBtn.addEventListener("click", function () {
    navMobileMenu.classList.remove("navbar__mobile-open");
  });
}

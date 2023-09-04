/*  Swiper Slider   */
var swiper = new Swiper(".testimonialSlider", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination.testimonial-pagination",
    clickable: true,
  },
});

/*  Tab Components   */
const tabsBtn = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content-box");

tabsBtn.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and tab content
    tabsBtn.forEach((tab) => tab.classList.remove("tab-btn-active"));
    tabContent.forEach((content) => content.classList.remove("tab-content-box-active"));

    // Add active class to the clicked tab
    tab.classList.add("tab-btn-active");

    // Show the corresponding tab content with opacity animation
    const tabId = tab.getAttribute("data-tab");
    const activeTabContent = document.getElementById(tabId);
    activeTabContent.classList.add("tab-content-box-active");
  });
});

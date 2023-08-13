const dropdowns = document.querySelectorAll(".dropdown");

const menuOpenBtn = document.querySelector(".header__burger");
const menuCloseBtn = document.querySelector(".header__menu-close-btn");
const menuAnchor = document.querySelectorAll(".header__menu-link");
const menuPopup = document.querySelector(".header__menu");



menuAnchor.forEach(el => {
    el.addEventListener("click", () => {
        menuPopup.classList.remove("header__menu-opened");
    })
});

menuCloseBtn.addEventListener("click", () => {
    menuPopup.classList.remove("header__menu-opened");
})

menuOpenBtn.addEventListener("click", () => {
    menuPopup.classList.add("header__menu-opened");
})


dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector(".dropdown-button");
    const icon = dropdown.querySelector(".dropdown-icon");
    const content = dropdown.querySelector(".dropdown-content");
    const items = content.querySelectorAll(".dropdown-item");

    button.addEventListener("click", () => {
        content.classList.toggle("open");
        icon.classList.toggle("rotate");
    });

    items.forEach(item => {
        item.addEventListener("click", () => {
            button.textContent = item.textContent;
            content.classList.remove("open");
            icon.classList.remove("rotate");
        });
    });
});

// Close the dropdown when clicking outside of it
window.addEventListener("click", event => {
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            const content = dropdown.querySelector(".dropdown-content");
            const icon = dropdown.querySelector(".dropdown-icon");
            content.classList.remove("open");
            icon.classList.remove("rotate");
        }
    });
});

let swiper = new Swiper(".feedbackSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".feedbackSwiper-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },
    navigation: {
        nextEl: ".feedbackSwiper-next",
        prevEl: ".feedbackSwiper-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1144: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});
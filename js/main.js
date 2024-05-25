  const header = document.querySelector('.header');

  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

// ----------------
document.addEventListener("DOMContentLoaded", () => {

    const swiper = new Swiper('.swiper', {

        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
            el: '.reviews-dots',
            bulletActiveClass: 'reviews-dot-active',
            bulletClass: 'reviews-dot',
            clickable: true
        },

        navigation: {
            nextEl: '.review-button-next',
            prevEl: '.review-button-prev',
        },
        breakpoints: {
            // mobile - 320
            320: {
                slidesPerView: 1
            },
            // tablet - 768
            768: {
                slidesPerView: 2
            },
        }
    });

});

// -------------------------

const filterBtns = document.querySelectorAll(".works-btn");
const worksList = document.querySelector(".works-list");

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach((filterBtn) => {
            filterBtn.classList.remove("is-active");
        });
        btn.classList.add("is-active");

        const filterValue = btn.getAttribute("data-filter");

        for (const item of worksList.children) {
            if (filterValue === "all") {
                item.classList.remove('hide');
                item.classList.add('show');
            } else if (item.classList.contains(filterValue)) {
                item.classList.remove('hide');
                item.classList.add('show');
            } else {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        }
    });
}
);

// ---------------------------------

(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();

// --------------------------------

 const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

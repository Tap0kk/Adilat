 
//  --------sticky menu

const header = document.querySelector('.header');

  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

// ----------------swiper

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

// -------------------------filter-btn

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


// --------active-menu

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.header-menu-link').forEach((link) => {
        let id = link.getAttribute('href').replace('#', '');
        if (id === entry.target.id) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}, {
  threshold: 0.5
});

document.querySelectorAll('section').forEach(section => { observer.observe(section) });

// -----mob-menu and menu-btn

const menu = document.querySelector('.mob-backdrop')
const menuBtn = document.querySelector('.menu-icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('mob-menu-nav')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.mob-menu-link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

// ----scroll
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})
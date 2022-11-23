const favorites = document.querySelectorAll('.favorite');

favorites.forEach(favorite => {
  favorite.addEventListener('click', () => {
    favorite.classList.toggle('favorite_check')
  })
});

const theBest = new Swiper('.theBest-slider', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    centeredSlides: true,
    lazyLoading: true,
    loop: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 40,
    direction: 'horizontal',

            
  breakpoints: {
    320: {
        slidesPerView: 2.5,
    },
    576: {
        slidesPerView: 4.5,
    },
    768: {
        slidesPerView: 6.5,
    },
    992: {
        slidesPerView: 8.5,
    },
}
  });


const watched = new Swiper('.watched-slider', {
    navigation: {
        nextEl: '.watched-slider-next',
        prevEl: '.watched-slider-prev',
      },
      pagination: {
        el: '.watched-slide-pagination',
        type: 'fraction',
        renderFraction: function(currentClass, tottalClass) {
            return `<span class="' + ${currentClass} +'"></span> `+ ' из ' + `<span class="' + ${tottalClass} +'"></span> ` 
        }
      },
  
      watchOverflow: true,
      spaceBetween: 10,
      
    breakpoints: {
        320: {
            slidesPerView: 1.2,
                loop: true,
        },
        576: {
            slidesPerView: 1.8,
                loop: false,
        },
        768: {
            slidesPerView: 2.2,
        },
        992: {
            slidesPerView: 3.2,
        },
        1350: {
            slidesPerView: 4.2,
        },
    }
  });
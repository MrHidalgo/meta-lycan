import Common from "./common/common";


const initSmoothScroll = (
  btnName = "[anchor-js]",
  animateSpeed = 1000
) => {

  $(btnName).on("click", (e) => {

    let linkHref = $(e.currentTarget).attr('href'),
      headerHeight = $(".header").outerHeight() || 0,
      topHeightOffset = $(linkHref).offset().top - headerHeight;

    $('[anchor-js]').removeClass('is-active');
    $(e.currentTarget).addClass('is-active');

    $('body, html').animate({
      scrollTop: topHeightOffset
    }, animateSpeed);

  });

};
const initHeaderFixed = () => {

  let countScroll = $(window).scrollTop(),
    headerElement = $('.header');

  if (countScroll > 10) {
    headerElement.addClass("header--fixed");
  } else {
    headerElement.removeClass("header--fixed");
  }

};

const initStellar = () => {
  if ($("[parallax-js]").length) {
    $(function () {
      $.stellar({
        // Set scrolling to be in either one or both directions
        horizontalScrolling: false,
        verticalScrolling: true,

        // Set the global alignment offsets
        horizontalOffset: 0,
        verticalOffset: 0,

        // Refreshes parallax content on window load and resize
        responsive: false,

        // Select which property is used to calculate scroll.
        // Choose 'scroll', 'position', 'margin' or 'transform',
        // or write your own 'scrollProperty' plugin.
        scrollProperty: 'scroll',

        // Select which property is used to position elements.
        // Choose between 'position' or 'transform',
        // or write your own 'positionProperty' plugin.
        positionProperty: 'position',

        // Enable or disable the two types of parallax
        parallaxBackgrounds: true,
        parallaxElements: true,

        // Hide parallax elements that move outside the viewport
        hideDistantElements: false,

        // Customise how elements are shown and hidden
        hideElement: function($elem) { $elem.hide(); },
        showElement: function($elem) { $elem.show(); }
      });
    });
  }
};


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  initSmoothScroll();
  initHeaderFixed();
  initStellar();

  // MACROS
  gsap.to(".roadmap__bg img", {
    scrollTrigger: {
      scrub: true
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: "none"
  });
  gsap.to(".me__visual", {
    scrollTrigger: {
      scrub: true
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: "none"
  });
  gsap.to(".me__cover", {
    scrollTrigger: {
      scrub: true
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: "none"
  });
  gsap.to(".perks__visual", {
    scrollTrigger: {
      scrub: true
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: "none"
  });


  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    once: true
  });

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {
  initHeaderFixed();
}, false);

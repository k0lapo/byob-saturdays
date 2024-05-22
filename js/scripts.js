$(document).ready(function () {

  'use strict'

  // WOW
  var wow = new WOW(
  {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // true
    live:         false        // true
  });
  wow.init();


  
  // Loading heavy images with placeholder first
  var placeholder = document.querySelector('.js-header-background');
  // 1: load small image and show it
  var img = new Image();
  img.src = placeholder.dataset.small;
  img.onload = function () {
    placeholder.style.backgroundImage = "url('" + placeholder.dataset.small + "')";
  };
  // 2: load large image
  var imgLarge = new Image();
  var newBackground = document.createElement("div");
  imgLarge.src = placeholder.dataset.large;
  imgLarge.onload = function (event) {
    placeholder.classList.add('page-header__background--is-loaded');
    newBackground.style.backgroundImage = "url('" + placeholder.dataset.large + "')";
    placeholder.appendChild(newBackground);
  };



  $(document).ready(function() {
    var lastScrollTop = 0;

    $(window).scroll(function() {
        if ($(window).width() < 768) {
            var st = $(this).scrollTop();
            if (st > lastScrollTop) {
                // User is scrolling down
                $(".navbar-collapse").addClass("hide-nav");
            } else {
                // User is scrolling up
                $(".navbar-collapse").removeClass("hide-nav");
            }
            lastScrollTop = st;
        }
    });
});

  // Buy tickets button on click
  document.getElementById('buyTickets').addEventListener('click', function () {
    var button = this;

    // Add the 'clicked' class to apply click styling
    button.classList.add('clicked');

    // Set a timeout to remove the 'clicked' class after a short delay
    setTimeout(function () {
      button.classList.remove('clicked');
    }, 300); // Adjust the delay as needed
  });
  





  
  // lightGallery inicialization
  if (document.getElementById('lightgallery')) {
     $("#lightgallery").lightGallery();
  }

  // Main nav menu actions
  var toggleMenu = function() {
    $('.js-page-header').toggleClass("page-header--is-shown");
    $('.js-mobile-menu-btn .icon-bar').toggleClass("icon-bar--is-toggled");
    $('.js-page-header__brand').toggleClass("page-header__brand--is-hidden");
  }

  $(".js-mobile-menu-btn").on('click', function () {
    toggleMenu();
  });


  function updateCountdown() {
    var eventDate = new Date('2023-10-28T00:00:00').getTime();
    var currentDate = new Date().getTime();
    var timeLeft = eventDate - currentDate;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').innerHTML = 'Event is happening now!';
    } else {
      var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      var countdownText = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
      document.getElementById('countdown').innerHTML = countdownText;
    }
  }

  // Initial update of the countdown
  updateCountdown();

  // Update the countdown every 1 second
  var countdownInterval = setInterval(updateCountdown, 1000);



  //smooth scrolling
  $('a[href*="#"]:not([href="#"])').on('click', function (e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      toggleMobileMenu();
      if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  var toggleMobileMenu = function () {
      if ($(window).width() < 768) {
          $('.menu-collapsed').toggleClass("menu-expanded");
      }
  };

  
  // Not proper event delegation, but this method from official Bootstrap docs
  $('.js-tabs-block a').on('click', function(e) {
    e.preventDefault();
    $(this).tab('show');
  });

});








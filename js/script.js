document.addEventListener("DOMContentLoaded", () => {

  // Top menu item set active
  const topMenuItem = document.querySelectorAll('.top-menu .menu-item');

  if (typeof(topMenuItemActive) != "undefined" && topMenuItemActive !== null) {
    topMenuItem[topMenuItemActive].classList.add('active');
  }

  // Sticky header
  window.onscroll = function() {
    const scrStickyHeader = window.pageYOffset || document.documentElement.scrollTop;
    const stickyHeader = document.querySelector('.js-sticky-header');
    if (scrStickyHeader > 400) {
      stickyHeader.classList.add('active');
    }
    if (scrStickyHeader < 400) {
      stickyHeader.classList.remove('active');
    }
  }

  // Paralax main image
  window.addEventListener('scroll', function() {
    let parallax = document.getElementById('parallax');
    if (parallax) {
      let offset = window.pageYOffset;
      let clientWidth = document.body.clientWidth;
      parallax.style.backgroundPositionY = (-50 + offset * 0.4) + 'px';
    }
  });

  // Our advantages slider
  const ourAdvantagesSlider = document.querySelector('.our-advantages-slider');

  if (ourAdvantagesSlider) {
    new Swiper('.our-advantages-slider', {
      loop: true,
      
      autoplay: false,
      breakpoints: {
        // mobile 320-991
        320: {
          spaceBetween: 15,
          slidesPerView: 1,
        },
        // desktop >= 480
        480: {
          spaceBetween: 15,
          slidesPerView: 2,
        },
        // desktop >= 992
        992: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        // desktop >= 1200
        1400: {
          spaceBetween: 24,
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    });
  }

  // News Swiper slider
  /*
  const newsSlider = document.querySelector('.news-slider');

  if (newsSlider) {
    new Swiper('.news-slider', {
      loop: true,
      slidesPerView: 4,
      autoplay: false,
      breakpoints: {
        // mobile 320-991
        320: {
          spaceBetween: 15,
          slidesPerView: 1,
        },
        // mobile >= 480
        480: {
          spaceBetween: 15,
          slidesPerView: 2,
        },
        // mobile >= 768
        768: {
          spaceBetween: 15,
          slidesPerView: 3,
        },
        // desktop >= 992
        992: {
          spaceBetween: 24,
          slidesPerView: 4,
        },
        // desktop >= 1200
        1200: {
          spaceBetween: 30,
          slidesPerView: 4,
        }
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    });
  }
  */

  // Testimonials slider
   const testimonialsSlider = document.querySelector('.testimonials-slider');

  if (testimonialsSlider) {
    new Swiper('.testimonials-slider', {
      loop: true,
      autoplay: false,
      spaceBetween: 10,
      breakpoints: {
        // mobile 320-991
        320: {
          slidesPerView: 1,
        },
        // mobile >= 480
        480: {
          slidesPerView: 2,
        }
      },
      navigation: {
        nextEl: '.section-title-wrapper .swiper-next',
        prevEl: '.section-title-wrapper .swiper-prev',
      },
    });
  }

  // Показать еще в форме открытие полей
  const moreInfoBtn = document.querySelector('.more-info-btn');
  const openMoreInfo = document.querySelector('.js-open-more-info');

  if (moreInfoBtn) {
    moreInfoBtn.onclick = function() {
      openMoreInfo.classList.toggle('active');
    }
  }

  // Project detail Swiper slider
  const projectDetailSlider = document.querySelector('.project-detail-slider');

  if (projectDetailSlider) {
    const slider = new Swiper('.project-detail-slider', {
      loop: true,
      slidesPerView: 1,
      autoplay: false,
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    });
  }

  // Location advantages Swiper slider слайдер Здесь начинается удобство
  const locationAdvantagesSlider = document.querySelector('.location-advantages-slider');

  if (locationAdvantagesSlider) {
    const laSlider = new Swiper('.location-advantages-slider', {
      loop: true,
      slidesPerView: 'auto',
      autoplay: false,
      breakpoints: {
        // mobile 320-991
        320: {
          spaceBetween: 10,
        },
        // desktop >= 992
        992: {
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    });

    const locationContentItems = document.querySelectorAll('.location-content-item');

    // Переключение слайда при клике на неактивный
    laSlider.on('click', function (swiper, event) {
      let el = swiper.clickedSlide; // Get the DOM element of the clicked slide

      if (!el.classList.contains('swiper-slide-active')) {
        swiper.slideNext();
      }
    });

    // Обновление галереи .location-content-item
    laSlider.on('slideChange', function (swiper) {
      let slideActiveIndex = swiper.realIndex;

      for (let i = 0; i < locationContentItems.length; i++) {
        locationContentItems[i].classList.remove('active');
      }

      locationContentItems[slideActiveIndex].classList.add('active');
    });

  }

  // Slim Select в большой форме
  const bigBookingOnlineForm = document.getElementById('big-booking-online-form');

  if (bigBookingOnlineForm) {

    new SlimSelect({
      select: '#big-form-project',
      showSearch: false,
      searchFocus: false,
    });

    new SlimSelect({
      select: '#big-form-type-meeting',
      showSearch: false,
      searchFocus: false,
    });

    new SlimSelect({
      select: '#big-form-type-room',
      showSearch: false,
      searchFocus: false,
    });

    new SlimSelect({
      select: '#big-form-type-payment',
      showSearch: false,
      searchFocus: false,
    });

  }

  // Date picker
  let datepickers = document.querySelectorAll('.datepicker');

  datepickers.forEach((item) => {
    const dp = new AirDatepicker(item, {
      minDate: new Date(),
      autoClose: true
    });
  });

  // Аккордеон на странице Ипотека
  const accordeon = document.querySelector('.accordeon');

  if (accordeon) {
    const accordeonItems = document.querySelectorAll('.accordeon-item');

    accordeonItems.forEach((item) => {
      // const accordeonItemTitle = item.querySelector('.accordeon-item-title');

      // accordeonItemTitle.onclick = function () {
      item.onclick = function () {
        item.classList.toggle('active');
      }
    });
  }


  // Current year
  const now = new Date();
  const year = now.getFullYear();

  const currentYear = document.getElementById('current-year');
  currentYear.innerText = year;


  // Mobile menu
  const body = document.querySelector('body');
  const openMenuBtns = document.querySelectorAll('.js-open-menu-btn');
  const closeMenuBtns = document.querySelectorAll('.js-close-menu')
  const mobileMenu = document.querySelector('.mobile-menu');

  function openMobileMenu() {
    body.classList.add('overflow-hidden');
    mobileMenu.classList.add('active');
  }

  function closeMobileMenu() {
    body.classList.remove('overflow-hidden');
    mobileMenu.classList.remove('active');
  }

  openMenuBtns.forEach((item) => {
    item.onclick = function() {
      if (item.classList.contains('menu-is-open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    }
  });

  closeMenuBtns.forEach((item) => {
    item.onclick = function() {
      closeMobileMenu();
    }
  });

  const listParentClick = document.querySelectorAll('.mobile-menu li.menu-item a');

  for (let i=0; i < listParentClick.length; i++) {
    listParentClick[i].onclick = function (event) {
      event.preventDefault();
      closeMobileMenu();
      let hrefClick = this.href;
      setTimeout(function() {
        location.href = hrefClick
      }, 500);
    }
  }


  // Окна
  const modalWindows = document.querySelectorAll('.modal-window');

  const advantagesModalBtns = document.querySelectorAll('.js-advantages-modal-btn');
  const advantagesModal = document.querySelector('#advantages-modal');

  const videoBtn = document.querySelector('#video-btn');
  const videoModal = document.querySelector('#video-modal');

  const writeUsBtn = document.querySelector('.js-write-us-btn');
  const writeUsModal = document.querySelector('#write-us-modal');

  const testimonialBtn = document.querySelector('.js-testimonial-btn');
  const testimonialModal = document.querySelector('#testimonial-modal');

  const callbackFormBtns = document.querySelectorAll('.js-callback-form-btn');
  const callbackModal = document.querySelector('#callback-modal');
  const modalCloseBtns = document.querySelectorAll('.modal-window .modal-close');

  advantagesModalBtns.forEach((item) => {
    item.onclick = function () {
      modalWindowOpen(advantagesModal);
    }
  });

  if (videoBtn) {
    videoBtn.onclick = function () {
      modalWindowOpen(videoModal);
    }
  }

  if (writeUsBtn) {
    writeUsBtn.onclick = function () {
      modalWindowOpen(writeUsModal);
    }
  }

  if (testimonialBtn) {
    testimonialBtn.onclick = function () {
      modalWindowOpen(testimonialModal);
    }
  }

  callbackFormBtns.forEach((item) => {
    item.onclick = function () {
      modalWindowOpen(callbackModal);
    }
  });
  
  function modalWindowOpen(win) {
    // Открытие окна
    body.classList.add('overflow-hidden');
    win.classList.add('active');
    setTimeout(function(){
      win.childNodes[1].classList.add('active');
    }, 200);
  }

  for (let i=0; i < modalCloseBtns.length; i++) {
    modalCloseBtns[i].onclick = function() {
      modalWindowClose(modalWindows[i]);
    }
  }

  for (let i = 0; i < modalWindows.length; i++) {
    modalWindows[i].onclick = function(event) {
      let classList = event.target.classList;
      for (let j = 0; j < classList.length; j++) {
        if (classList[j] == "modal" || classList[j] == "modal-wrapper" || classList[j] == "modal-window") {
          modalWindowClose(modalWindows[i])
        }
      }
    }
  }

  function modalWindowClose(win) {
    body.classList.remove('overflow-hidden');
    win.childNodes[1].classList.remove('active');
    setTimeout(() => {
      win.classList.remove('active');
    }, 300);
    // Если это окно с видео, то при закрытии ставлю видео на паузу
    if (win == videoModal) {
      const video = document.getElementById("video");
      video.load();
    }
  }


  // Input phone mask
  function inputPhoneMask() {
    const elementPhone = document.querySelectorAll('.js-input-phone-mask');

    const maskOptionsPhone = {
      mask: '+{7} (000) 000 00 00'
    };

    elementPhone.forEach((item) => {
      const mask = IMask(item, maskOptionsPhone);
    });

  }

  inputPhoneMask();


  // AJAX Отправка формы Заказать звонок
  const bigBookingOnlineFormBtn = document.getElementById('big-booking-online-form-btn');

  function ajaxCallback(form) {

    let arr = [];

    const inputName = form.querySelector('.js-required-name');
    if (inputName.value.length < 3 || inputName.value.length > 30) {
      inputName.classList.add('required');
      arr.push(false);
    } else {
      inputName.classList.remove('required');
    }

    const inputEmail = form.querySelector('.js-required-email');
    if (inputEmail.value.length < 3 || inputEmail.value.length > 50) {
      inputEmail.classList.add('required');
      arr.push(false);
    } else {
      inputEmail.classList.remove('required');
    }

    const inputPhone = form.querySelector('.js-required-phone');
    if (inputPhone.value.length != 18) {
      inputPhone.classList.add('required');
      arr.push(false);
    } else {
      inputPhone.classList.remove('required');
    }

    const inputProject = form.querySelector('.js-required-project');
    if (inputProject.value.length < 3 || inputProject.value.length > 50) {
      inputProject.classList.add('required');
      arr.push(false);
    } else {
      inputProject.classList.remove('required');
    }

    const inputCheckboxes = form.querySelectorAll('.js-required-checkbox');
    inputCheckboxes.forEach((item) => {
      if (item.checked) {
        item.classList.remove('required');
      } else {
        arr.push(false);
        item.classList.add('required');
      }
    });

    if (arr.length == 0) {

      fetch('/phpmailer/mailer.php', {
        method: 'POST',
        cache: 'no-cache',
        body: new FormData(form)
      })
      .catch((error) => {
        console.log(error);
      })

      alert("Спасибо. Мы свяжемся с вами.");

      form.reset();

    }

    return false;
  }

  if (bigBookingOnlineFormBtn) {
    bigBookingOnlineFormBtn.onclick = function(event) {
      ajaxCallback(bigBookingOnlineForm);
    }
  }


  // Set cookie
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/" + "; sameSite=Lax;";
  }

  function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function checkCookies() {
    let cookieNote = document.querySelector('#cookie_note');
    let cookieBtnAccept = cookieNote.querySelector('#cookie_accept');

    // Если куки we-use-cookie нет или она просрочена, то показываем уведомление
    if (!getCookie('we-use-cookie')) {
      cookieNote.classList.add('active');
    }

    // При клике на кнопку устанавливаем куку we-use-cookie на один год
    cookieBtnAccept.addEventListener('click', function () {
      setCookie('we-use-cookie', 'true', 365);
      cookieNote.classList.remove('active');
    });
  }

  checkCookies();
  
});
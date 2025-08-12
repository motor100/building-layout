document.addEventListener("DOMContentLoaded", () => {

  // Top menu item set active
  const topMenuItem = document.querySelectorAll('.top-menu .menu-item');

  if (typeof(topMenuItemActive) != "undefined" && topMenuItemActive !== null) {
    topMenuItem[topMenuItemActive].classList.add('active');
  }

  // News Swiper slider
  const newsSlider = document.querySelector('.news-slider');

  if (newsSlider) {
    const slider = new Swiper('.news-slider', {
      loop: true,
      slidesPerView: 'auto',
      // slidesPerView: 5,
      // spaceBetween: 30,
      autoplay: false,
      breakpoints: {
      // mobile 320-991
      320: {
        spaceBetween: 15,
      },
      // desktop >= 992
      992: {
        spaceBetween: 24,
      },
      // desktop >= 992
      1200: {
        spaceBetween: 30,
      }
    },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    });
  }

  /*
  // Events Swiper slider
  const eventsSlider = document.querySelector('.events-slider');

  if (eventsSlider) {
    const slider = new Swiper('.events-slider', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 15,
      autoplay: false,
    });
  }
  */

  // Вкладки на странице Карточка проекта
  /*
  const projectsDetailPage = document.querySelector('.projects-detail-page');

  if (projectsDetailPage) {

    const tabs = document.querySelectorAll('.tab');
    const tabsContent = document.querySelectorAll('.tab-content');

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].onclick = function() {

        for (let j = 0; j < tabs.length; j++) {
          tabs[j].classList.remove('active');
          tabsContent[j].classList.remove('active');
        }

        tabs[i].classList.add('active');
        tabsContent[i].classList.add('active');
      }
    }
  }
  */
  


  // Current year
  const now = new Date();
  const year = now.getFullYear();

  const currentYear = document.getElementById('current-year');
  currentYear.innerText = year;


  // Mobile menu
  const body = document.querySelector('body');
  const burgerMenuWrapper = document.querySelector('.burger-menu-wrapper');
  const openMenuBtns = document.querySelectorAll('.js-open-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  function openMobileMenu() {
    body.classList.add('overflow-hidden');
    burgerMenuWrapper.classList.add('menu-is-open');
    mobileMenu.classList.add('active');
  }

  function closeMobileMenu() {
    body.classList.remove('overflow-hidden');
    burgerMenuWrapper.classList.remove('menu-is-open');
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

  /*
  // Filter menu
  const filterMenuBtn = document.querySelector('#filter-menu-btn');
  const filterMenu = document.querySelector('.filter-menu');
  const filterMenuClose = document.querySelector('.filter-menu-close');

  function openFilterMenu() {
    body.classList.add('overflow-hidden');
    filterMenu.classList.add('active');
  }

  function closeFilterMenu() {
    body.classList.remove('overflow-hidden');
    filterMenu.classList.remove('active');
  }

  if (filterMenuBtn) {
    filterMenuBtn.onclick = openFilterMenu;
    filterMenuClose.onclick = closeFilterMenu;
  }
  */

  // Окна
  const modalWindows = document.querySelectorAll('.modal-window');

  const advantagesModalBtns = document.querySelectorAll('.js-advantages-modal-btn');
  const advantagesModal = document.querySelector('#advantages-modal');

  const videoBtn = document.querySelector('#video-btn');
  const videoModal = document.querySelector('#video-modal');

  const callbackFormBtns = document.querySelectorAll('.callback-form-btn');
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

    /*
    // Маска номера телефона на странице оформления заказа checkout billing billing_phone
    const billingPhone = document.getElementById('billing_phone');

    if (billingPhone) {
      const maskBillingPhone = IMask(billingPhone, maskOptionsPhone);
    }
    */
  }

  inputPhoneMask();


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

  /*
  // Показ карты Офис/Склад страница Контакты
  const contactsPage = document.querySelector('.contacts-page');

  if (contactsPage) {

    const mapBtns = document.querySelectorAll('.map-btn');
    const mapItems = document.querySelectorAll('.map-item');

    for (let i = 0; i < mapBtns.length; i++) {
      mapBtns[i].onclick = function() {
        console.log(mapBtns[i]);
        for (let j = 0; j < mapItems.length; j++) {
          mapItems[j].classList.add('hidden');
        }

        mapItems[i].classList.remove('hidden');
      }
    }

  }
  */

  /*
  // Поиск товаров
  const searchInput = document.querySelector('.search-input');
  const searchClose = document.querySelector('.search-close');

  if (searchInput) {
    searchInput.oninput = function() {
      if (searchInput.value.length > 1 && searchInput.value.length <= 200) {
        searchClose.classList.add('active');
      } else {
        searchClose.classList.remove('active');
      }
    }

    function searchResetForm() {
      searchInput.value = '';
      searchClose.classList.remove('active');
    }

    searchClose.onclick = searchResetForm;
  }
  */
});
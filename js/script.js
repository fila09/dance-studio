'use strict'

document.addEventListener('click', documentClick);

function documentClick(e) {
  const targetItem = e.target;

  if (targetItem.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
  }
}



// Tabs
const howItemLinks = document.querySelectorAll('.dance__item');
const rowTabs = document.querySelectorAll('.row-tabs');
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest('.dance__item')) {
    howItemLinks.forEach((howItemLink, index) => {
      if (howItemLink.classList.contains('active')) {
        currentActiveIndex = index;
        howItemLink.classList.remove('active');
      }
      if (howItemLink === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    rowTabs[currentActiveIndex].classList.remove('active');
    rowTabs[newActiveIndex].classList.add('active');
  }
});

//Modal
const overlay = document.getElementById('editOverlay');
const heroPopup = document.querySelector('.hero__popup');
const heroButton = document.querySelector('.hero__button');
const popupCancel = document.querySelector('.popup__cancel');
const popupBtn = document.querySelector('.popup__btn');

function openFormModal() {
  overlay.style.display = 'block';
  heroPopup.style.display = 'block';
}
function closeFormModal() {
  overlay.style.display = 'none';
  heroPopup.style.display = 'none';
}

heroButton.addEventListener('click', openFormModal);
popupCancel.addEventListener('click', closeFormModal);
popupBtn.addEventListener('click', closeFormModal);

var selector = document.getElementById("tel", "tel2");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

var selector = document.getElementById("tel2");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

new JustValidate('.popup__form', '.popup__modal', {
  rules: {
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    },
    name: {
      required: true
    },
  },
  messages: {
    tel: {
      required: 'Вы не ввели телефон',
    },
    name: {
      required: 'Вы не ввели имя',
    }
  },
  colorWrong: '#ff5c00',
});

/*new JustValidate('.popup__modal', {
  rules: {
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    },
    name: {
      required: true
    },
  },
  messages: {
    tel: {
      required: 'Вы не ввели телефон',
    },
    name: {
      required: 'Вы не ввели имя',
    }
  },
  colorWrong: '#ff5c00',
});*/
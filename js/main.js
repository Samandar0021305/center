const elSiteHeaderToggler = document.querySelector('.js-site-header-toggler');
const elSiteHeaderSitenav = document.querySelector('.site-header__sitenav');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', function () {
    elSiteHeaderSitenav.classList.toggle('site-header__sitenav--open');
  });
}


// const elRegistrationForm = document.querySelector('.registration-form');

// if (elRegistrationForm) {
//   elRegistrationForm.addEventListener('submit', function (evt) {
//     evt.preventDefault();

//     let data = {
//       Ism: elRegistrationForm.querySelector('[name="Ism"]').value,
//       Telefon: elRegistrationForm.querySelector('[name="Telefon"]').value,
//       Kurs: elRegistrationForm.querySelector('[name="Kurs"]').value
//     };

//     fetch('https://script.google.com/macros/s/AKfycbwm6KDq2w1P_j6UzAerEc9Vgg3arErjd8uXEH78M-Lzxt22mVR6K5abqnhpzu_3TwzU/exec', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//     });
//   });
// }

const elTeachersPrevButton = document.querySelector('.js-teachers-prev-button');
const elTeachersNextButton = document.querySelector('.js-teachers-next-button');

var slider = tns({
  container: '.index-teachers__list',
  items: 1,
  slideBy: 1,
  mouseDrag: true,
  speed: 400,
  gutter: 40,
  prevButton: elTeachersPrevButton,
  nextButton: elTeachersNextButton,
  nav: false,
  arrowKeys: true,
  responsive: {
    700: {
      items: 2
    },
    1100: {
      items: 3
    }
  }
});

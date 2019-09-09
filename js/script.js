let promoSlides = document.querySelectorAll('.promo-slider__slide');
let promoLeftArrow = document.querySelector('.promo-slider__togle-left');
let promoRightArrow = document.querySelector('.promo-slider__togle-right');
let current = 0;

function slider() {
  for (let i = 0; i<promoSlides.length; i++) {
    promoSlides[i].classList.add('shide');
  }
  promoSlides[current].classList.remove('shide');

}

promoLeftArrow.addEventListener('click', function(){
  if(current - 1 == -1) {
    current = promoSlides.length-1;
  }
  else {
    current--;
  }
  slider();
})

promoRightArrow.addEventListener('click', function(){
  if(current + 1 == promoSlides.length) {
    current = 0;
  }
  else {
    current++;
  }
  slider();
})

let additionalText = document.querySelector('.about-us__additional-text');
let buttonMore = document.querySelector('.button-more');

buttonMore.addEventListener('click', function(){
  additionalText.classList.remove('shide');
  buttonMore.classList.add('shide');
})

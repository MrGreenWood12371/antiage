let promoSlides = document.querySelectorAll('.promo-slider__slide');
let promoLeftArrow = document.querySelector('.promo-slider__togle-left');
let promoRightArrow = document.querySelector('.promo-slider__togle-right');
let current = 0;
let priceListCurrent = 0;
let staffCurrent = 0;

function slider(slides, counter) {
  for (let i = 0; i<slides.length; i++) {
    slides[i].classList.add('shide');
  }
  slides[counter].classList.remove('shide');

}

promoLeftArrow.addEventListener('click', function(){
  if(current - 1 == -1) {
    current = promoSlides.length-1;
  }
  else {
    current--;
  }
  slider(promoSlides, current);
})

promoRightArrow.addEventListener('click', function(){
  if(current + 1 == promoSlides.length) {
    current = 0;
  }
  else {
    current++;
  }
  slider(promoSlides, current);
})

let additionalText = document.querySelector('.about-us__additional-text');
let buttonMore = document.querySelector('.button-more');
let textImage = document.querySelector('.about-us__image')

buttonMore.addEventListener('click', function(){
  additionalText.classList.remove('shide');
  buttonMore.classList.add('shide');
  textImage.classList.add('about-us__add-image');
})

let priceListButtonLeft = document.querySelector('.price-list__button-left');
let priceListButtonRight = document.querySelector('.price-list__button-right');
let priceListSlides = document.querySelectorAll('.price-list__slide');

priceListButtonLeft.addEventListener('click', function(evt){
  evt.preventDefault();
  if(priceListCurrent - 1 == -1) {
    current = priceListSlides.length-1;
  }
  else {
    priceListCurrent--;
  }
  slider(priceListSlides, priceListCurrent);
})

priceListButtonRight.addEventListener('click', function(evt){
  evt.preventDefault();
  if(current + 1 == priceListSlides.length) {
    priceListCurrent = 0;
  }
  else {
    priceListCurrent++;
  }
  slider(priceListSlides, priceListCurrent);
})

let staffButtonLeft = document.querySelector('.our-staff__left-arrow');
let staffButtonRight = document.querySelector('.our-staff__right-arrow');
let staffSlides = document.querySelectorAll('.staff-slider__slide');


staffButtonLeft.addEventListener('click', function(evt){
  evt.preventDefault();
  if(staffCurrent - 1 == -1) {
    staffCurrent = staffSlides.length-1;
  }
  else {
    staffCurrent--;
  }
  slider(staffSlides, staffCurrent);
})

staffButtonRight.addEventListener('click', function(evt){
  evt.preventDefault();
  if(staffCurrent + 1 == staffSlides.length) {
    staffCurrent = 0;
  }
  else {
    staffCurrent++;
  }
  slider(staffSlides, staffCurrent);
})

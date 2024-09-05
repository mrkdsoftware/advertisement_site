window.onload = function () {
  document.getElementById('title-text').classList.add('animate__fadeIn');
  document.getElementById('title-image').classList.add('animate__slideInRight')
};

const firstImgEl = document.getElementById('first-info-img');
const secondImgEl = document.getElementById('second-info-img');
const thirdImgEl = document.getElementById('third-info-img');

window.onscroll = function(){
  if(isVisible(firstImgEl)){
    loadFirstImg();
  }
  if(isVisible(secondImgEl)){
    loadSecondImg();
  }
  if(isVisible(thirdImgEl)){
    loadThirdImg();
  }

};

function loadFirstImg() {
  setTimeout( () => {
    firstImgEl.classList.remove('hide');
    firstImgEl.classList.add('animate__slideInRight');
    document.getElementById('info-first-text').classList.add('animate__backInDown');
  }, 400);
}

function loadSecondImg() {
  setTimeout( () => {
    secondImgEl.classList.remove('hide');
    secondImgEl.classList.add('animate__slideInLeft');
    document.getElementById('info-second-text').classList.add('animate__backInDown');
  }, 800);
}

function loadThirdImg() {
  isThirdImgLoaded=true;
  setTimeout( () => {
    thirdImgEl.classList.remove('hide');
    thirdImgEl.classList.add('animate__slideInRight');
    document.getElementById('info-third-text').classList.add('animate__backInDown');
  }, 1200);
}

function isVisible(el, threshold = 1) {
  let observer;
  return new Promise((resolve) => {
    observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.intersectionRatio >= threshold) {
        resolve(true);
        observer.disconnect();
      }
    }, { threshold: threshold });

    observer.observe(el);
  });
}

const firstReviewCard = document.getElementById('first-review-container');
const secondReviewCard = document.getElementById('second-review-container');
const thirdReviewCard = document.getElementById('third-review-container');

let currentReviewCard = 0;

function scrollLeftCard() {
  currentReviewCard--;
  if(currentReviewCard<0) currentReviewCard=2;
  changeCurrentReviewCard();
}

function scrollRight() {
  currentReviewCard++;
  if(currentReviewCard>2) currentReviewCard=0;
  changeCurrentReviewCard();
}

function changeCurrentReviewCard() {
  if(currentReviewCard===0){
    secondReviewCard.classList.add('hidden');
    thirdReviewCard.classList.add('hidden');
    firstReviewCard.classList.remove('hidden');
  }
  else if(currentReviewCard===1){
    firstReviewCard.classList.add('hidden');
    thirdReviewCard.classList.add('hidden');
    secondReviewCard.classList.remove('hidden');
  }
  else if(currentReviewCard===2){
    firstReviewCard.classList.add('hidden');
    secondReviewCard.classList.add('hidden');
    thirdReviewCard.classList.remove('hidden');
  }
  else{
    currentReviewCard=0;
    changeCurrentReviewCard();
  }


}

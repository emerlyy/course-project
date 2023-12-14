const slider = document.querySelector('.slider');
const prevButton = slider.querySelector('.slider__prev');
const nextButton = slider.querySelector('.slider__next');

let activeIndex = 0;
const maxImages = slider.children.length - 2;

const changeImage = (nextIndex) => {
  slider.children[activeIndex].classList.remove('active');
  slider.children[nextIndex].classList.add('active');
  activeIndex = nextIndex;
}

prevButton.addEventListener('click', () => {
  if (activeIndex === 0) {
    changeImage(maxImages - 1);
  } else {
    changeImage(activeIndex - 1);
  }
})

nextButton.addEventListener('click', () => {
  if (activeIndex === maxImages - 1) {
    changeImage(0);
  } else {
    changeImage(activeIndex + 1);
  }
})
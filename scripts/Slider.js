export default class Slider {
  constructor(slider) {
    this._slider = slider;
    this._count = 0;
    this._images = this._slider.querySelectorAll('.slider__list-img');
    this._sliderBox = this._slider.querySelector('.slider__box');
    this._sliderList = this._sliderBox.querySelector('.slider__list');
    this._nextSlide = this._nextSlide.bind(this);
    this._prevSlide = this._prevSlide.bind(this);
    this.init = this.init.bind(this);
    this._handleTouchStart = this._handleTouchStart.bind(this);
    this._handleTouchMove = this._handleTouchMove.bind(this);
    this._x1 = null;
    this._x2 = null;
  }

  init() {
    this._width = this._slider.offsetWidth;
    this._images.forEach((item) => {
      item.style.width = this._width + 'px';
    });
    this._rollSlider();
  }

  _nextSlide() {
    this._count++;
    if (this._count >= this._images.length) {
      this._count = 0;
    }
    this._rollSlider();
  }

  _prevSlide() {
    this._count--;
    if (this._count < 0) {
      this._count = this._images.length - 1;
    }
    this._rollSlider();
  }

  setEventListeners() {
    window.addEventListener('resize', this.init);

    this._slider
      .querySelector('.slider__control-item_type_next')
      .addEventListener('click', this._nextSlide);

    this._slider
      .querySelector('.slider__control-item_type_prev')
      .addEventListener('click', this._prevSlide);

    this._sliderList.addEventListener('transitionend', () => {
      this._addAnimation();
    });

    this._sliderList.addEventListener('touchstart', this._handleTouchStart);
    this._sliderList.addEventListener('touchmove', this._handleTouchMove);
  }
  _rollSlider() {
    this._sliderList.style.transform =
      'translate(-' + this._count * this._width + 'px)';
  }

  _addAnimation() {
    this._sliderList.style.transition = 'all ease 1s';
  }

  _handleTouchStart(evt) {
    this._x1 = evt.touches[0].clientX;
  }

  _handleTouchMove(evt) {
    if (!this._x1) {
      return false;
    }
    this._x2 = evt.changedTouches[0].pageX;
    let xDiff = this._x2 - this._x1;
    if (xDiff > 0) {
      this._prevSlide();
    }
    if (xDiff < 0) {
      this._nextSlide();
    }
    this._x1 = null;
  }
}

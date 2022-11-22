import Popup from './Popup.js'

export default class PopupWithSlider extends Popup {
  constructor(popupSelector, { removeListeners }) {
    super(popupSelector);
    this._sliderList = this._popup.querySelector('.slider__list');
    this._removeListeners = removeListeners
  }
  _removeAnimation() {
    this._sliderList.style.transition = '';
  }
  open() {
    this._removeAnimation();
    super.open();
  }
  close() {
    this._removeListeners()
    super.close();
  }
}

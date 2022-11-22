import Slider from './Slider.js'

export default class SliderWithPhoto extends Slider {
  constructor(slider, count) {
    super(slider)
    this._count = count
    this._handleMove = this._handleMove.bind(this)

  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleMove);
    super.setEventListeners()
  }

  _handleMove(evt) {
    if (evt.key === 'ArrowRight') {
      this._nextSlide()
      console.log('ad')
    }
    if (evt.key === 'ArrowLeft') {
      this._prevSlide()
    }
  }
  _removeListeners() {
    document.removeEventListener('keydown', this._handleMove)
    window.removeEventListener('resize', this.init)
  }
}

export default class HorizontalScrollSection {
  constructor(sectionSelector, scrollableSelector) {
    this.section = document.querySelector(sectionSelector);
    this.scrollableClass = scrollableSelector;
  }

  #checkScrollable() {
    if (this.section.classList.contains(this.scrollableClass)) {
      return true;
    }
    return false;
  }
  #setScrollable() {
    if (this.section.scrollWidth > this.section.offsetWidth) {
      this.section.classList.add(this.scrollableClass);
    } else {
      this.section.classList.remove(this.scrollableClass);
    }
  }

  #startScrolling() {
    this.isMouseDown = true;
    this.section.style.cursor = 'grabbing';
  }
  #resetScrolling() {
    this.isMouseDown = false;
    this.section.style.cursor = null;
  }

  setScrollable() {
    this.isMouseDown = false;
    this.startX = 0;
    this.#setScrollable();

    this.section.addEventListener('pointerdown', (e) => {
      if (!this.#checkScrollable()) {
        return;
      }
      this.#startScrolling();
      e.preventDefault();
      this.startX = e.clientX;
    });

    this.section.addEventListener('pointerup', (e) => {
      this.#resetScrolling();
    });

    this.section.addEventListener('pointerleave', (e) => {
      if (!this.#checkScrollable()) {
        return;
      }
      this.#resetScrolling();
    });

    this.section.addEventListener('pointermove', (e) => {
      if (!this.#checkScrollable()) {
        return;
      }
      if (this.isMouseDown && e.isPrimary) {
        this.section.scrollLeft += this.startX - e.clientX;
        this.startX = e.clientX;
      }
    });

    window.addEventListener('resize', () => {
      this.#setScrollable();
    });
  }
}

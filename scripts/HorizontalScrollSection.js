export default class HorizontalScrollSection {
  constructor(sectionSelector, scrollableSelector) {
    this.section = document.querySelector(sectionSelector);
    this.scrollableClass = scrollableSelector;
    this.#setScrollable();
    this.isMouseDown = false;
    this.startX = 0;

    this.section.addEventListener('mousedown', (e) => {
      if (!this.#checkScrollable()) {
        return;
      }
      e.preventDefault();

      this.isMouseDown = true;
      this.startX = e.pageX;
    });

    this.section.addEventListener('mouseup', (e) => {
      this.isMouseDown = false;
    });

    this.section.addEventListener('mouseleave', (e) => {
      if (!this.#checkScrollable()) {
        return;
      }
      //TODO задача на всплытие
        console.log('out');
        this.isMouseDown = false;
    });

    this.section.addEventListener('mousemove', (e) => {
      if (!this.#checkScrollable()) {
        return;
      }
      if (this.isMouseDown) {
        this.section.scrollLeft += this.startX - e.pageX;
        this.startX = e.pageX;
      }
    });

    window.addEventListener('resize', () => {
      this.#setScrollable();
    });
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
}

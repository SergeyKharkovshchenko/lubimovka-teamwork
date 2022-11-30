export default class HorizontalScrollSection {
  constructor(
    sectionSelector,
    { scrollableClass, fogWrapperSelector, leftFogClass, rightFogClass }
  ) {
    this.section = document.querySelector(sectionSelector);
    this.scrollableClass = scrollableClass;
    this.fogEl = this.section.closest(fogWrapperSelector);
    this.leftFogClass = leftFogClass;
    this.rightFogClass = rightFogClass;
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
    this.#checkFog(this.section);
  }

  #checkFog(offsetEl) {
    if (this.section.scrollLeft > 0) {
      this.fogEl.classList.add(this.leftFogClass);
    } else {
      this.fogEl.classList.remove(this.leftFogClass);
    }
    if (
      this.section.scrollWidth - this.section.scrollLeft >
      offsetEl.offsetWidth
    ) {
      this.fogEl.classList.add(this.rightFogClass);
    } else {
      this.fogEl.classList.remove(this.rightFogClass);
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
        this.#checkFog(e.currentTarget);
      }
    });

    window.addEventListener('resize', () => {
      this.#setScrollable();
    });
  }
}

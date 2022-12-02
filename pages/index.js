import HorizontalScrollSection from '../scripts/HorizontalScrollSection.js';
import SliderWithPhoto from '../scripts/SliderWithPhoto.js';
import PopupWithSlider from '../scripts/PopupWithSlider.js';

import { scrollClasses } from '../utils/constants.js';

const peopleScrolling = new HorizontalScrollSection(
  '.people-section__peoples',
  scrollClasses
);
peopleScrolling.setScrollable();

const playSectionScrolling = new HorizontalScrollSection(
  '.play-section__wrapper',
  scrollClasses
);
playSectionScrolling.setScrollable();

const twoVideoSectionScrolling = new HorizontalScrollSection(
  '.two-video-section__wrapper',
  scrollClasses
);
twoVideoSectionScrolling.setScrollable();

const threeVideoSectionScrolling = new HorizontalScrollSection(
  '.three-video-section__wrapper',
  scrollClasses
);
threeVideoSectionScrolling.setScrollable();

const photo = document.querySelector('.photo-section');
const images = Array.from(photo.querySelectorAll('.photo-section__list-img'));
const slider = document.querySelector('.slider');

images.forEach((item) => {
  item.addEventListener('click', () => {
    openSlider(item);
  });
});

const openSlider = (item) => {
  const gallery = new SliderWithPhoto(slider, images.indexOf(item));
  const popupSlider = new PopupWithSlider('.popup_open_img', {
    removeListeners: () => {
      gallery._removeListeners();
    },
  });
  gallery.init();
  gallery.setEventListeners();
  popupSlider.open();
};

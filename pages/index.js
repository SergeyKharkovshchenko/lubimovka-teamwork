import HorizontalScrollSection from '../scripts/HorizontalScrollSection.js';
import SliderWithPhoto from '../scripts/SliderWithPhoto.js';
import PopupWithSlider from '../scripts/PopupWithSlider.js';

const peopleScrolling = new HorizontalScrollSection(
  '.people-section__peoples',
  'box-for-horizontal-scroll'
);

const playSectionScrolling = new HorizontalScrollSection(
  '.play-section__wrapper',
  'box-for-horizontal-scroll'
);

const twoVideoSectionScrolling = new HorizontalScrollSection(
  '.two-video-section__wrapper',
  'box-for-horizontal-scroll'
);

const threeVideoSectionScrolling = new HorizontalScrollSection(
  '.three-video-section__wrapper',
  'box-for-horizontal-scroll'
);

peopleScrolling.setScrollable();
playSectionScrolling.setScrollable();
twoVideoSectionScrolling.setScrollable();
threeVideoSectionScrolling.setScrollable();

const photo = document.querySelector('.photo-section');
const image = Array.from(photo.querySelectorAll('.photo-section__list-img'));
const slider = document.querySelector('.slider');

image.forEach((item) => {
  item.addEventListener('click', () => {
    openSlider(item);
  });
});

const openSlider = (item) => {
  const gallery = new SliderWithPhoto(slider, image.indexOf(item));
  const popupSlider = new PopupWithSlider('.popup_open_img', {
    removeListeners: () => {
      gallery._removeListeners();
    },
  });
  gallery.init();
  gallery.setEventListeners();
  popupSlider.open();
};


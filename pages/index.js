import HorizontalScrollSection from '../scripts/HorizontalScrollSection.js';

const peopleScrolling = new HorizontalScrollSection(
  '.people-section__peoples',
  'box-for-horizontal-scroll'
);

const playSectionScrolling = new HorizontalScrollSection(
  '.play-section__wrapper',
  'box-for-horizontal-scroll'
);

peopleScrolling.setScrollable();
playSectionScrolling.setScrollable();

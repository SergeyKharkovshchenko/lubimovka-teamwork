import HorizontalScrollSection from '../scripts/HorizontalScrollSection.js';

const peopleScrolling = new HorizontalScrollSection(
  '.people-section__peoples',
  'box-for-horizontal-scroll'
);
peopleScrolling.setScrollable();

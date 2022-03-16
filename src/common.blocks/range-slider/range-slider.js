$('.range-slider__input').slider({
  range: true,
  handle: 'square',
  natural_arrow_keys: true,
  tooltip: 'always',
  labelledby: 11,
  tooltip_split: true,
  formatter(value) {
    return value;
  },
});

function init() {
  const contactsMap = new ymaps.Map('contacts-map', {
    center: [53.105952, 46.595245],
    zoom: 17,
  });
  contactsMap.geoObjects.add(new ymaps.Placemark(
    [53.105952, 46.595245], {},
    {
      // iconColor: '#FF0000',
      // preset: 'search#placemark',
      iconImageSize: [66, 74],
      iconImageOffset: [-33, -74],
      iconLayout: 'default#imageWithContent',
      iconImageHref: '/img/marker.png',
    },
  ));
}

if ($('div').is('#contacts-map')) {
  ymaps.ready(init);
}

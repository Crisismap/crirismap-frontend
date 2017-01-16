// array of geoJSONs
const fakeData = [
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [125.6, 10.1]
    },
    properties: {
      name: 'Dinagat Islands'
    }
  }
];

export default function fetchCategory(categoryId) { // eslint-disable-line no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => (
      Math.random() > 0.1 ? resolve(fakeData) : reject({ reason: 'network' })
    ));
  });
}

import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet.markercluster';

import fakeClusterData from './fakeClusterData';
import styles from './styles.sass';

L.Icon.Default = L.Icon.Default.extend({
  options: {
    iconUrl: '/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [15, 37],
    popupAnchor: [0, -25],
    shadowUrl: '/marker-icon.png',
    shadowSize: [0, 0],
    shadowAnchor: [0, 0]
  }
});

L.Icon.Default.imagePath = '/resources';

L.Marker = L.Marker.extend({
  options: {
    icon: new L.Icon.Default()
  }
});

export default class Map extends Component {
  componentDidMount() {
    this.map = L.map(this.mapEl, {
      attributionControl: false
    }).setView([-37.82, 175.24], 13);

    this.initBaseLayer();
    this.renderMarkerClusterGroup();
  }

  componentWillReceiveProps() {
    // update map objects here
  }

  shouldComponentUpdate() {
    return false;
  }

  initBaseLayer() {
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  renderMarkerClusterGroup() {
    const markers = L.markerClusterGroup();

    for (let i = 0; i < fakeClusterData.length; i += 1) {
      const a = fakeClusterData[i];
      const title = a[2];
      const marker = L.marker(new L.LatLng(a[0], a[1]), { title });

      marker.bindPopup(title);
      markers.addLayer(marker);
    }

    this.map.addLayer(markers);
  }

  render() {
    return (
      <div
        id={'map'}
        className={styles.map}
        ref={(el) => { this.mapEl = el; }}
      />
    );
  }
}

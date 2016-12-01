import React, { Component } from 'react'
import styles from './styles.sass'
import L from 'leaflet'
import 'leaflet.markercluster'

import fakeClusterData from './fakeClusterData'

export default class Map extends Component {
  componentWillReceiveProps() {
    // update map objects here
  }

  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {
    this.map = L.map(this.mapEl, {
      attributionControl: false
    }).setView([-37.82, 175.24], 13)

    this.initBaseLayer()
    this.renderMarkerClusterGroup()
  }

  initBaseLayer() {
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map)
  }

  renderMarkerClusterGroup() {
    var markers = L.markerClusterGroup()

    for (var i = 0; i < fakeClusterData.length; i++) {
      var a = fakeClusterData[i]
      var title = a[2]
      var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title })
      marker.bindPopup(title)
      markers.addLayer(marker)
    }
    this.map.addLayer(markers)
  }

  render() {
    return <div className={styles.map} id={'map'} ref={(el) => { this.mapEl = el }}/>
  }
}

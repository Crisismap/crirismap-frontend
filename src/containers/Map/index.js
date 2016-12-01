import React, { Component } from 'react'
import styles from './styles.sass'
import L from 'leaflet'

export default class Map extends Component {
  componentWillReceiveProps() {
    // update map objects here
  }

  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {
    const map = L.map(this.mapEl).setView([50, 50], 3)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map)
  }

  render() {
    return <div className={styles.map} id={'map'} ref={(el) => { this.mapEl = el }}/>
  }
}

import React, { Component } from 'react';
import { Layout, Panel, Sidebar, IconButton } from 'react-toolbox';

import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import Map from '../Map';

export default class App extends Component {
  componentWillMount() {
    this.setState({
      sidebarPinned: false
    });
  }

  toggleSidebar() {
    this.setState({
      sidebarPinned: !this.state.sidebarPinned
    });
  }

  render() {
    return (
      <Layout>
        <Panel>
          <IconButton icon="menu" onClick={() => this.toggleSidebar()} />
          <Map />
        </Panel>

        <Sidebar pinned={this.state.sidebarPinned} width={5}>
          <div>
            <IconButton icon="close" onClick={() => this.toggleSidebar()} />
          </div>

          <div style={{ flex: 1 }}>
            <p>categories go here</p>
          </div>
        </Sidebar>
      </Layout>
    );
  }
}

// @flow

import React from 'react';
import { render } from 'react-dom';
import styles from './styles.sass';
import Layout from './containers/Layout';

window.addEventListener('load', (ev) => {
  const el = document.createElement('div');
  el.className = styles.root;
  document.body.appendChild(el);
  render(
    <Layout />
  , el);
});

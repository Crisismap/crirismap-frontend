// @flow

import React from 'react'
import { render } from 'react-dom'
import styles from './styles.sass'
import App from './App'

window.addEventListener('load', function (ev) {
  let el = document.createElement('div')
  el.className = styles['root']
  document.body.appendChild(el)
  render(
    <App />
  , el)
})

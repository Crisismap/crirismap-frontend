// @flow
import React from 'react';
import { render } from 'react-dom';

import styles from './styles.sass';
import Layout from './containers/Layout';

const el = document.getElementById('app');

el.className = styles['root'];
render(<Layout />, el);

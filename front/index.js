const React = require('react');
const ReactDOM = require('react-dom');

import Main from './components/Main';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('main');
const root = createRoot(container);
root.render(<Main />);

import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from './App';

const headings = ['When', 'Who', 'Description'];

const props = {
  headings,
  title: 'OpenLibrary Api'
};

render( <App {...props} />, document.getElementById('app'));
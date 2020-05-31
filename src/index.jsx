/**
 * @file index.jsx
 * The entry point for our app.
 */

// Imports
import React from 'react';
import { render } from 'react-dom';
import App from './com/app';
import './index.scss';

// Render App
const mountNode = document.querySelector('#root');
render(<App />, mountNode);

import React from 'react';
import ReactDOM from 'react-dom';
import 'balloon-css/balloon.css';
import './assets/css/cursors.css';
import './assets/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

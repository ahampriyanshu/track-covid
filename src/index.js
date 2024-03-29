import * as serviceWorker from './serviceWorker';
import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
const App = lazy(() => import('./App' /* webpackChunkName: "App" */));
ReactDOM.render(
  <Suspense fallback={<div />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
serviceWorker.register();

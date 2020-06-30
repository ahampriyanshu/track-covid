import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = lazy(() => import('./App' /* webpackChunkName: "App" */));

ReactDOM.render(
  <Suspense fallback={<div />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);

serviceWorker.register();
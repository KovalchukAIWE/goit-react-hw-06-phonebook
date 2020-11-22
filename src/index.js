import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { App } from './components/App';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<h2>loading</h2>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
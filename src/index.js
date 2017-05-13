import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import game, {initialState} from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


const store = createStore(game, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);

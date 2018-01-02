import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import hueAppReducer from './reducers'
import HueAppContainer from './containers'

const store = createStore(hueAppReducer);

render(
  <Provider store={store}>
    <HueAppContainer />
  </Provider>,
  document.getElementById('root')
)
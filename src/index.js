import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import myApp from './reducers'
import App from './components/App'

let store = createStore(myApp)
window.store = store //for dev needs

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

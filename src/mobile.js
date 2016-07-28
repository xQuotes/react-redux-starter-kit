// import '../node_modules/normalize.css/normalize.css'
import "./style/mobile.less"
import './common/js/flexible.js'

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/mobile'

import configureStore from './store/configureStore'
const store = configureStore()

ReactDOM.render(
  (<Root store={store} />),
  document.getElementById('react')
)
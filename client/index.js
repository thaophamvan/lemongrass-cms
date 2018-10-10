import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import store, { history } from './stores'
import './styles/site.scss'

ReactDOM.render(
  <App store={store} history={history}/>,
  document.getElementById('root')
)

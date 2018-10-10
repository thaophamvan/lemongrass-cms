import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import store, { history } from './stores'
import routes from './routes'
import './styles/site.scss'

ReactDOM.render(
  <App store={store} history={history} routes={routes}/>,
  document.getElementById('root')
)

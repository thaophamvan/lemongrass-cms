import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route } from 'react-router-dom'
import Home from './Home'
import DrinkType from './DrinkType'
import DrinkTemperature from './DrinkTemperature'

const App = props => (
  <Provider store={props.store}>
    <ConnectedRouter history={props.history}>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/drink-type" component={DrinkType}/>
        <Route path="/drink-temperature" component={DrinkTemperature}/>
      </div>
    </ConnectedRouter>
  </Provider>
)

export default App
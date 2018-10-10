import DefaultLayout from '../layouts/DefaultLayout'
import Home from '../components/Home'
import DrinkType from '../components/DrinkType'
import DrinkTemperature from '../components/DrinkTemperature'

export default [
  {
    layout: DefaultLayout,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        path: '/drink-type',
        component: DrinkType,
        exact: true
      },
      {
        path: '/drink-temperature',
        component: DrinkTemperature,
        exact: true
      },
    ]
  }
]

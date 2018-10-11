import DefaultLayout from '../layouts/DefaultLayout'
import Home from '../components/Home'
import DrinkTypeRoute from '../containers/DrinkType'
import DrinkTypeNewRoute from '../containers/DrinkTypeNew'
import DrinkTypeEditRoute from '../containers/DrinkTypeEdit'
import DrinkTemperatureRoute from '../containers/DrinkTemperature'
import DrinkTemperatureNewRoute from '../containers/DrinkTemperatureNew'
import DrinkTemperatureEditRoute from '../containers/DrinkTemperatureEdit'

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
        component: DrinkTypeRoute,
        exact: true
      },
      {
        path: '/drink-type/new',
        component: DrinkTypeNewRoute,
      },
      {
        path: '/drink-type/:id/edit',
        component: DrinkTypeEditRoute
      },
      {
        path: '/drink-temperature',
        component: DrinkTemperatureRoute,
        exact: true
      },
      {
        path: '/drink-temperature/new',
        component: DrinkTemperatureNewRoute,
        exact: true
      },
      {
        path: '/drink-temperature/:id/edit',
        component: DrinkTemperatureEditRoute,
        exact: true
      }
    ]
  }
]

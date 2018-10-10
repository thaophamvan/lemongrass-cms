import DefaultLayout from '../layouts/DefaultLayout'
import Home from '../components/Home'
import DrinkTypeRoute from '../containers/DrinkType'
import DrinkTypeNewRoute from '../containers/DrinkTypeNew'
import DrinkTypeEditRoute from '../containers/DrinkTypeEdit'
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
        component: DrinkTemperature,
      },
    ]
  }
]

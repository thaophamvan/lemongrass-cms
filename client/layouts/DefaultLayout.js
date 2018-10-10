import React from 'react'
import PageLayout from './PageLayout'
import SideNav from '../components/SideNav'

/**
 * @extends PageLayout
 * @see https://simonsmith.io/reusing-layouts-in-react-router-4/
 */
const DefaultLayout = ({ component: Component, ...rest }) => (
  <PageLayout
    {...rest}
    component={matchProps => (
      <React.Fragment>
        <SideNav/>

        <main className="lg_main">
          <div className="container-fluid">
            <Component {...matchProps} />
          </div>
        </main>
      </React.Fragment>
    )}
  />
)

export default DefaultLayout
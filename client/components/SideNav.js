import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => (
  <nav className="lg_side-nav p-0">
    <ul className="lg_side-nav__nav">
      <li className="lg_side-nav__item lg_side-nav__logo">
        <div className="text-center">
          <Link className="pl-0" to="/">
            <img id="MDB-logo" src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png" alt="MDB Logo"/>
          </Link>
        </div>
      </li>
      <li className="lg_side-nav__item">
        <form className="lg_side-nav__search-form" autoComplete="off">
          <div className="form-group mt-0 d-block">
            <input type="text" className="lg_side-nav__input form-control pb-1 mb-0" name="s" placeholder="Search"/>
          </div>
        </form>
      </li>
      <li className="lg_side-nav__item">
        <ul className="lg_side-nav__menu">
          <li className="lg_side-nav__item">
            <Link className="lg_side-nav__link" to="/"><i className="fa fa-home"></i>Home</Link>
          </li>
          <li className="lg_side-nav__item">
            <Link className="lg_side-nav__link" to="/drink-type"><i className="fa fa-pencil"></i>Contents<i className="fa fa-angle-up lg_side-nav__rotate-icon"></i></Link>
            <div className="lg_side-nav__collapsible-body">
              <ul className="lg_side-nav__sub-menu">
                <li className="lg_side-nav__item">
                  <Link className="lg_side-nav__link" to="/drink-type">Drink Type</Link>
                </li>
                <li className="lg_side-nav__item">
                  <Link className="lg_side-nav__link" to="/drink-temperature">Drink Temperature</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="lg_side-nav__item">
            <Link className="lg_side-nav__link" to="/"><i className="fa fa-cog"></i>Others<i className="fa fa-angle-down lg_side-nav__rotate-icon"></i></Link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
)

export default SideNav

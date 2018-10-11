import React from 'react'
import { Link } from 'react-router-dom'
import DrinkTypeRow from '../DrinkTypeRow'

const DrinkType = (props) => (
  <div>
    <h1>Drink Type</h1>

    <Link to="/drink-type/new" className="btn btn-primary btn-md">New</Link>

    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Height</th>
            <th>Diameter</th>
            <th>Volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(item =>
            <DrinkTypeRow key={item.id} {...item} deleteRow={props.deleteRow}/>
          )}
        </tbody>
      </table>
    </div>
  </div>
)

export default DrinkType

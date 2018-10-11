import React from 'react'
import { Link } from 'react-router-dom'
import DrinkTemperatureRow from '../DrinkTemperatureRow'

const DrinkTemperature = (props) => (
  <div>
    <h1>Drink Temperature</h1>

    <Link to="/drink-temperature/new" className="btn btn-primary btn-md">New</Link>

    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Desired temperature</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(item =>
            <DrinkTemperatureRow key={item.id} {...item} deleteRow={props.deleteRow}/>
          )}
        </tbody>
      </table>
    </div>
  </div>
)

export default DrinkTemperature

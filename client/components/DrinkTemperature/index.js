import React from 'react'

const DrinkTemperature = () => (
  <div>
    <h1>Drink Temperature</h1>

    <a href="/drink-temperature/new" className="btn btn-primary btn-md">New</a>

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
          <tr>
            <td>id</td>
            <td>name</td>
            <td>description</td>
            <td>desired_temperature</td>
            <td>
              <a className="btn btn-secondary btn-sm" href="/drink-temperature/id/edit">Edit</a>
              <a className="btn btn-danger btn-sm" href="/drink-temperature/id/delete">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default DrinkTemperature

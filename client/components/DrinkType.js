import React from 'react'

const DrinkType = () => (
  <div>
    <h1>Drink Type</h1>

    <a href="/drink-type/new" className="btn btn-primary btn-md">New</a>

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
          <tr>
            <td>id</td>
            <td>name</td>
            <td>type</td>
            <td>description</td>
            <td>height</td>
            <td>diameter</td>
            <td>volume</td>
            <td>
              <a className="btn btn-secondary btn-sm" href="/drink-type/id/edit">Edit</a>
              <a className="btn btn-danger btn-sm" href="/drink-type/id/delete">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default DrinkType

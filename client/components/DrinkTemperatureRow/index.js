import React from 'react'
import { Link } from 'react-router-dom'

const DrinkTemperatureRow = (props) => {
  const deleteRow = () => {
    if (confirm('Are you sure?')) {
      props.deleteRow(props.id)
    }
  }

  return (
    <tr>
      <td className="align-middle">{props.id}</td>
      <td className="align-middle">{props.name}</td>
      <td className="align-middle">{props.description}</td>
      <td className="align-middle">{props.desired_temperature}</td>
      <td>
        <Link to={`/drink-temperature/${props.id}/edit`} className="btn btn-secondary btn-sm mr-2">Edit</Link>
        <button className="btn btn-danger btn-sm m-0" onClick={deleteRow}>Delete</button>
      </td>
    </tr>
  )
}

export default DrinkTemperatureRow

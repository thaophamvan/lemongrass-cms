import React from 'react'
import { Link } from 'react-router-dom'

const DrinkTypeRow = (props) => {
  const deleteRow = () => {
    if (confirm('Are you sure?')) {
      props.deleteRow(props.id)
    }
  }

  return (
    <tr>
      <td className="align-middle">{props.id}</td>
      <td className="align-middle">{props.name}</td>
      <td className="align-middle">{props.type}</td>
      <td className="align-middle">{props.description}</td>
      <td className="align-middle">{props.height}</td>
      <td className="align-middle">{props.diameter}</td>
      <td className="align-middle">{props.volume}</td>
      <td>
        <Link to={`/drink-type/${props.id}/edit`} className="btn btn-secondary btn-sm mr-2">Edit</Link>
        <button className="btn btn-danger btn-sm m-0" onClick={deleteRow}>Delete</button>
      </td>
    </tr>
  )
}

export default DrinkTypeRow

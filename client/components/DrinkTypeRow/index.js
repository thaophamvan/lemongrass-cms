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
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.type}</td>
      <td>{props.description}</td>
      <td>{props.height}</td>
      <td>{props.diameter}</td>
      <td>{props.volume}</td>
      <td>
        <Link to={`/drink-type/${props.id}/edit`} className="btn btn-secondary btn-sm">Edit</Link>
        <button className="btn btn-danger btn-sm" onClick={deleteRow}>Delete</button>
      </td>
    </tr>
  )
}

export default DrinkTypeRow

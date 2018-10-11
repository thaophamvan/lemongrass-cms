import React from 'react'

const DrinkTemperatureForm = (props) => {
  const changeFieldValue = (key, e) => {
    props.updateData({
      [key]: e.target.value
    })
  }

  const fields = [
    'name',
    'description',
    'desired_temperature'
  ]

  const submitForm = e => {
    e.preventDefault()
    props.submitData()
  }

  return (
    <form onSubmit={submitForm} className="border border-light p-5">

      <p className="h4 mb-4">{props.title}</p>

      {fields.map(field =>
        <input key={field} type="text" className="form-control mb-4" placeholder={field} name={field} onChange={changeFieldValue.bind(this, field)} value={props[field]}/>
      )}

      <button className="btn btn-info btn-md" type="submit">Submit</button>

    </form>
  )
}

export default DrinkTemperatureForm

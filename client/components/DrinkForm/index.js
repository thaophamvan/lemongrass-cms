import React from 'react'

const DrinkForm = (props) => {
  const changeFieldValue = (key, e) => {
    props.updateData({
      [key]: e.target.value
    })
  }

  const submitForm = e => {
    e.preventDefault()

    if (props.edit) {
      props.submitData()
      return
    }

    props.updateData({
      edit: true
    })
  }

  return (
    <form onSubmit={submitForm} className="border border-light p-5">
      <p className="h4 mb-4">{props.title}</p>
      {props.edit ?
        <div>
          {props.fields.map(field =>
            <input key={field} type="text" className="form-control mb-4" placeholder={field} name={field} onChange={changeFieldValue.bind(this, field)} value={props[field]}/>
          )}

          <button className="btn btn-info btn-md" type="submit">Save</button>
        </div>
        :
        <div>
          {props.fields.map(field =>
            <p key={field} className="mb-4">{field}: {props[field]}</p>
          )}

          <button className="btn btn-info btn-md" type="submit">Edit</button>
        </div>
      }
    </form>
  )
}

export default DrinkForm

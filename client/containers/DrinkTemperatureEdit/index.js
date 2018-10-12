import React from 'react'
import { connect } from 'react-redux'
import {
  resetDrinkTemperatureData,
  fetchDrinkTemperatureItem,
  updateDrinkTemperatureData,
  updateDrinkTemperature
} from '../../actions/drinkTemperature'
import DrinkForm from '../../components/DrinkForm'

class DrinkTemperatureEditContainer extends React.Component {
  componentDidMount() {
    this.props.resetDrinkTemperatureData()
    this.props.fetchDrinkTemperatureItem(this.props.match.params.id)
  }

  render() {
    return (
      <DrinkForm
        {...this.props}
        title={`Edit ${this.props.name}`}
        fields={this.props.fields}
        updateData={this.props.updateDrinkTemperatureData}
        submitData={this.props.updateDrinkTemperature}
        edit={this.props.edit}
      />
    )
  }
}

const mapStateToProps = state => ({
  name: state.drinkTemperature.name,
  description: state.drinkTemperature.description,
  desired_temperature: state.drinkTemperature.desired_temperature,
  fields: state.drinkTemperature.fields,
  edit: state.drinkTemperature.edit
})

const mapDispatchToProps = {
  resetDrinkTemperatureData,
  fetchDrinkTemperatureItem,
  updateDrinkTemperatureData,
  updateDrinkTemperature
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkTemperatureEditContainer)

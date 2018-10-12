import React from 'react'
import { connect } from 'react-redux'
import {
  resetDrinkTemperatureData,
  updateDrinkTemperatureData,
  createDrinkTemperature
} from '../../actions/drinkTemperature'
import DrinkForm from '../../components/DrinkForm'

class DrinkTemperatureNewContainer extends React.Component {
  componentDidMount() {
    this.props.resetDrinkTemperatureData()
  }

  render() {
    return (
      <DrinkForm
        {...this.props}
        title="New drink temperature"
        fields={this.props.fields}
        updateData={this.props.updateDrinkTemperatureData}
        submitData={this.props.createDrinkTemperature}
      />
    )
  }
}

const mapStateToProps = state => ({
  name: state.drinkTemperature.name,
  description: state.drinkTemperature.description,
  desired_temperature: state.drinkTemperature.desired_temperature,
  fields: state.drinkTemperature.fields,
  edit: true
})

const mapDispatchToProps = {
  resetDrinkTemperatureData,
  updateDrinkTemperatureData,
  createDrinkTemperature
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkTemperatureNewContainer)

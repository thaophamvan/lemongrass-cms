import React from 'react'
import { connect } from 'react-redux'
import {
  resetDrinkTemperatureData,
  updateDrinkTemperatureData,
  createDrinkTemperature
} from '../../reducers/drinkTemperature'
import DrinkTemperatureForm from '../../components/DrinkTemperatureForm'

class DrinkTemperatureNewContainer extends React.Component {
  componentDidMount() {
    this.props.resetDrinkTemperatureData()
  }

  render() {
    return (
      <DrinkTemperatureForm
        {...this.props}
        title="New drink temperature"
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

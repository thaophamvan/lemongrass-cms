import React from 'react'
import { connect } from 'react-redux'
import {
  resetDrinkTemperatureData,
  fetchDrinkTemperatureItem,
  updateDrinkTemperatureData,
  updateDrinkTemperature
} from '../../actions/drinkTemperature'
import DrinkTemperatureForm from '../../components/DrinkTemperatureForm'

class DrinkTemperatureEditContainer extends React.Component {
  componentDidMount() {
    this.props.resetDrinkTemperatureData()
    this.props.fetchDrinkTemperatureItem(this.props.match.params.id)
  }

  render() {
    return (
      <DrinkTemperatureForm
        {...this.props}
        title={`Edit ${this.props.name}`}
        updateData={this.props.updateDrinkTemperatureData}
        submitData={this.props.updateDrinkTemperature}
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
  fetchDrinkTemperatureItem,
  updateDrinkTemperatureData,
  updateDrinkTemperature
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkTemperatureEditContainer)

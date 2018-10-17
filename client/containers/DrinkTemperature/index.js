import React from 'react'
import { connect } from 'react-redux'
import {
  fetchDrinkTemperatureData,
  deleteDrinkTemperature
} from '../../actions/drinkTemperature'
import DrinkTemperature from '../../components/DrinkTemperature'

class DrinkTemperatureContainer extends React.Component {
  componentDidMount() {
    this.props.fetchDrinkTemperatureData()
  }

  render() {
    return (
      <DrinkTemperature
        data={this.props.data}
        deleteRow={this.props.deleteDrinkTemperature}
      />
    )
  }
}

const mapStateToProps = state => ({
  data: state.drinkTemperature.data
})

const mapDispatchToProps = {
  fetchDrinkTemperatureData,
  deleteDrinkTemperature
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkTemperatureContainer)

import React from 'react'
import { connect } from 'react-redux'
import {
  resetDrinkTypeData,
  updateDrinkTypeData,
  createDrinkType
} from '../../reducers/drinkType'
import DrinkTypeForm from '../../components/DrinkTypeForm'

class DrinkTypeNewContainer extends React.Component {
  componentDidMount() {
    this.props.resetDrinkTypeData()
  }

  render() {
    return (
      <DrinkTypeForm
        {...this.props}
        updateData={this.props.updateDrinkTypeData}
        submitData={this.props.createDrinkType}
      />
    )
  }
}

const mapStateToProps = state => ({
  name: state.drinkType.name,
  type: state.drinkType.type,
  description: state.drinkType.description,
  height: state.drinkType.height,
  diameter: state.drinkType.diameter,
  volume: state.drinkType.volume,
})

const mapDispatchToProps = {
  resetDrinkTypeData,
  updateDrinkTypeData,
  createDrinkType
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkTypeNewContainer)

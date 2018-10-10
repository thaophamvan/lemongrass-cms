import React from 'react'
import { connect } from 'react-redux'
import {
  resetDrinkTypeData,
  fetchDrinkTypeItem,
  updateDrinkTypeData,
  updateDrinkType
} from '../../reducers/drinkType'
import DrinkTypeForm from '../../components/DrinkTypeForm'

class DrinkTypeEditContainer extends React.Component {
  componentDidMount() {
    this.props.resetDrinkTypeData()
    this.props.fetchDrinkTypeItem(this.props.match.params.id)
  }

  render() {
    return (
      <DrinkTypeForm
        {...this.props}
        updateData={this.props.updateDrinkTypeData}
        submitData={this.props.updateDrinkType}
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
  fetchDrinkTypeItem,
  updateDrinkTypeData,
  updateDrinkType
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkTypeEditContainer)

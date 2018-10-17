import React from 'react'
import { connect } from 'react-redux'
import {
  resetDrinkTypeData,
  updateDrinkTypeData,
  createDrinkType
} from '../../actions/drinkType'
import DrinkForm from '../../components/DrinkForm'

class DrinkTypeNewContainer extends React.Component {
  componentDidMount() {
    this.props.resetDrinkTypeData()
  }

  render() {
    return (
      <DrinkForm
        {...this.props}
        title="New drink type"
        fields={this.props.fields}
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
  fields: state.drinkType.fields,
  edit: true
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

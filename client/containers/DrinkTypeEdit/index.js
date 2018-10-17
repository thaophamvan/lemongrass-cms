import React from 'react'
import { connect } from 'react-redux'
import {
  resetDrinkTypeData,
  fetchDrinkTypeItem,
  updateDrinkTypeData,
  updateDrinkType
} from '../../actions/drinkType'
import DrinkForm from '../../components/DrinkForm'

class DrinkTypeEditContainer extends React.Component {
  componentDidMount() {
    this.props.resetDrinkTypeData()
    this.props.fetchDrinkTypeItem(this.props.match.params.id)
  }

  render() {
    return (
      <DrinkForm
        {...this.props}
        title={`Edit ${this.props.name}`}
        fields={this.props.fields}
        updateData={this.props.updateDrinkTypeData}
        submitData={this.props.updateDrinkType}
        edit={this.props.edit}
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
  edit: state.drinkType.edit
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

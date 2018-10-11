import React from 'react'
import { connect } from 'react-redux'
import {
  fetchDrinkTypeData,
  deleteDrinkType
} from '../../actions/drinkType'
import DrinkType from '../../components/DrinkType'

class DrinkTypeContainer extends React.Component {
  componentDidMount() {
    this.props.fetchDrinkTypeData()
  }

  render() {
    return (
      <DrinkType
        data={this.props.data}
        deleteRow={this.props.deleteDrinkType}
      />
    )
  }
}

const mapStateToProps = state => ({
  data: state.drinkType.data
})

const mapDispatchToProps = {
  fetchDrinkTypeData,
  deleteDrinkType
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkTypeContainer)

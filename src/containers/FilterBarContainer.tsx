import { connect } from 'react-redux'
import { setFilter, Filter } from '../actions/visibilityFilter'
import FilterBar from '../components/FilterBar'
import { State } from '../reducers/todoApp'
import { Dispatch } from 'react'
import { Action } from '../actions'

interface StateProps {
  activeFilter: Filter
  filters: Filter[]
}

export const mapStateToProps = (state: State): StateProps => {
  return {
    activeFilter: state.visibilityFilter,
    filters: [Filter.All, Filter.Completed, Filter.Incomplete]
  }
}

interface DispatchProps {
  onClickFilter: (filter: Filter) => void
}

export const mapDispatchToProps = (
  dispatch: Dispatch<Action>
): DispatchProps => {
  return {
    onClickFilter: (filter: Filter) => {
      dispatch(setFilter(filter))
    }
  }
}

const FilterBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar)

export default FilterBarContainer

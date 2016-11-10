import { connect } from 'react-redux'
import { setFilter, Filters } from '../actions/visibilityFilter'
import FilterBar from '../components/FilterBar'

export const mapStateToProps = (state) => {
  return {
    activeFilter: state.visibilityFilter,
    filters: [Filters.FILTER_ALL, Filters.FILTER_COMPLETED, Filters.FILTER_INCOMPLETE]
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onClickFilter: (filter) => {
      dispatch(setFilter(filter))
    }
  }
}

const FilterBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar)

export default FilterBarContainer

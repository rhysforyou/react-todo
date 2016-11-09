import { connect } from 'react-redux'
import { setFilter } from '../actions/visibilityFilter'
import Footer from '../components/Footer'
import { Filters } from '../actions/visibilityFilter'

const mapStateToProps = (state) => {
  return {
    activeFilter: state.visibilityFilter,
    filters: [Filters.FILTER_ALL, Filters.FILTER_COMPLETED, Filters.FILTER_INCOMPLETE]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickFilter: (filter) => {
      dispatch(setFilter(filter))
    }
  }
}

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer

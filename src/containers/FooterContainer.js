import React from 'react'
import Footer from '../components/Footer'
import { Filters } from '../actions/visibilityFilter'

const FooterContainer = ({activeFilter, onClickFilter}) => (
  <Footer filters={[Filters.FILTER_ALL, Filters.FILTER_COMPLETED, Filters.FILTER_INCOMPLETE]}
    activeFilter={activeFilter}
    onClickFilter={onClickFilter} />
)
FooterContainer.propTypes = {
  activeFilter: React.PropTypes.string.isRequired,
  onClickFilter: React.PropTypes.func
}

export default FooterContainer

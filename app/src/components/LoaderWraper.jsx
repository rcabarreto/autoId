import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Loader } from 'react-overlay-loader'

import 'react-overlay-loader/styles.css'

const LoaderWraper = (props) => {
  const { loader } = props

  return (
    <Loader fullPage loading={loader} />
  )
}

LoaderWraper.propTypes = {
  loader: PropTypes.bool.isRequired,
}


export default connect(state => ({ loader: state.loader }))(LoaderWraper)

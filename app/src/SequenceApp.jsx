import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import ReduxToastr from 'react-redux-toastr'

import 'bootstrap'
import './styles/app.scss'

import ErrorBoundary from './components/ErrorBoundary'
import LoaderWraper from './components/LoaderWraper'

import routes from './routes'

const SequenceApp = ({ history }) => (
  <ConnectedRouter history={history}>
    <ErrorBoundary>
      <LoaderWraper />
      {routes}
      <ReduxToastr
        timeOut={3000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        closeOnToastrClick
      />

    </ErrorBoundary>
  </ConnectedRouter>
)

export default SequenceApp

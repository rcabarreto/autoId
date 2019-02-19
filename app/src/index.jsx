import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import SequenceApp from './SequenceApp'

import { userActions } from './actions'

import configureStore, { history } from './store'

const store = configureStore()

store.dispatch(userActions.checkLoggedinUser())

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <SequenceApp history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  )
}

render()

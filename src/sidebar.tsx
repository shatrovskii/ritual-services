import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import PagesContainer from './containers/pages-container'

miro.onReady(() => {
    ReactDOM.render(
        <Provider store={store}>
            <PagesContainer />
        </Provider>,
        document.getElementById('react-app'))
})

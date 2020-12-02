import * as React from 'react'
import * as ReactDOM from 'react-dom'
import WelcomePage from './welcome-page'

miro.onReady(() => {
    ReactDOM.render(<WelcomePage />, document.getElementById('react-app'))
})

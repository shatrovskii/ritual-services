import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import PagesContainer from './containers/pages-container'
import {Amplify} from "aws-amplify";
import awsExports from "./aws-exports";

miro.onReady(() => {
    Amplify.configure(awsExports);

    ReactDOM.render(
        <Provider store={store}>
            <PagesContainer />
        </Provider>,
        document.getElementById('react-app'))
})

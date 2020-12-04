import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import PagesContainer from './components/pages-container'
import firebase from "firebase";
import {firebaseConfig} from "firebaseconfig";

firebase.initializeApp(firebaseConfig)

miro.onReady(() => {
    ReactDOM.render(
        <Provider store={store}>
            <PagesContainer />
        </Provider>,
        document.getElementById('react-app'))
})

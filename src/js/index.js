import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import axios from 'axios'
import store from './store/store'
import 'babel-polyfill'
import { theme } from './theme/theme'

import { GlobalStyle } from './theme/GlobalStyle'
import App from './App.js'

axios.defaults.baseURL = 'https://us-central1-intently-9f8b1.cloudfunctions.net/api'
axios.defaults.headers.common.Authorization = localStorage.FbIdToken
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const Index = () => (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <>
                <GlobalStyle />
                <App />
            </>
        </Provider>
    </ThemeProvider>
)

ReactDOM.render(<Index />, document.getElementById('root'))

// if (module.hot) {
//     module.hot.accept()
// }

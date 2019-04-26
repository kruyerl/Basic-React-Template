import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store from './store/store'
import { theme } from './theme/theme'

import { GlobalStyle } from './theme/GlobalStyle'
import App from './App.js'

require('babel-polyfill')

const Index = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <App />
            </>
        </ThemeProvider>
    </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'))

// if (module.hot) {
//     module.hot.accept()
// }

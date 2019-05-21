import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { PlaceholderProvider } from './context/PlaceholderContext'
import { theme } from './theme/Theme'
import { ThemeProvider } from 'styled-components'


ReactDOM.render(
<ThemeProvider theme={theme}>
   <PlaceholderProvider>
      <App />
   </PlaceholderProvider>
</ThemeProvider>
, document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

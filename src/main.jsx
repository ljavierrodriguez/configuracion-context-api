import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import GlobalContext from './context/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContext>
    <App />
  </GlobalContext>
)

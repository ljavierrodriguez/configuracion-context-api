import React from 'react'
import injectContext from './store/AppContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeGlobalContext from './pages/HomeGlobalContext'
import HomeAppContext from './pages/HomeAppContext'

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/global' element={<HomeGlobalContext />} />
                <Route path='/' element={<HomeAppContext />} />
            </Routes>
        </BrowserRouter>
    )
}

export default injectContext(App)
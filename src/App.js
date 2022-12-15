import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './sections/Hero'
import Gift from './sections/giftSection/Gift'
import Nav from './Nav'

function App() {
    return (
        <BrowserRouter>
            <div className='container'>
                <Nav />
                <Routes>
                    <Route exact path='/' element={<Hero />} />
                    <Route exact path='/gift' element={<Gift />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
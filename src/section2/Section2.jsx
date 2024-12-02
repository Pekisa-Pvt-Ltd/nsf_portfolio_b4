import React from 'react'
import Header from '../components/Header/Header'
import About from './About/About'
import './Section2.css'
import { Route, Routes } from 'react-router-dom'
import Services from './Services/Services'
import Contact from './Contact/Contact'

const Section2 = () => {
    return (
        <div className='section-2'>

            <Header />

            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />

            </Routes>



        </div>
    )
}

export default Section2

import { Routes, Route } from 'react-router-dom'

import HomePage from './../pages/HomePage/HomePage'
import ErrorPage from './../pages/ErrorPage/ErrorPage'
import AboutMePage from './../pages/AboutMePage/AboutMePage'



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMePage />} />

            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}

export default AppRoutes

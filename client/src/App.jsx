import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Listing from './pages/Listing'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import PropertyDetails from './components/PropertyDetails'
import MyBookings from './pages/MyBookings'
import AgencyReg from './components/AgencyReg'
import { useAppContext } from './context/AppContext'
import Sidebar from './components/owner/Sidebar'
import Dashboard from './pages/owner/Dashboard'
import AddProperty from './pages/owner/AddProperty'
import ListProp from './pages/owner/ListProp'


const App = () => {
  const {showAgencyReg}=useAppContext()
  const location=useLocation()
  const isOwnerPath=location.pathname.includes('owner')

  return (
    <main>
      {!isOwnerPath && <Header />}
      {showAgencyReg &&<AgencyReg />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/listing" element={<Listing/>} />
        <Route path="/listing/:id" element={<PropertyDetails/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/my-bookings" element={<MyBookings/>} />
        <Route path='/owner' element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path='/owner/add-property' element={<AddProperty />} />
          <Route path='/owner/list-property' element={<ListProp />} />
        </Route>
      </Routes>
      {!isOwnerPath && <Footer />}
    </main>
  )
}

export default App
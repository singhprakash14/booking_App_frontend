import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Booking from '../pages/Booking'
import BookingsList from '../pages/BookingsList'

const AllRoutes = () => {
    const [bookings,setBookings]=useState([])
  return (
    <Routes>
      <Route path='/' element={<Booking bookings={bookings} setBookings={setBookings} />}/>
      <Route path='/booking-list' element={<BookingsList bookings={bookings}  />}/>

    </Routes>
  )
}

export default AllRoutes

import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import HotelSlice from './HotelSlice'
import ReservationSlice from './ReservationSlice'

export const store = configureStore({
  reducer: { user:UserSlice,
  hotel:HotelSlice, reservation:ReservationSlice},
})
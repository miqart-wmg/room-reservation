import { combineReducers } from "redux";
import bookingsReducer from "./bookings.reducer";
import roomsReducer from "./rooms.reducer";

export default combineReducers({
  rooms: roomsReducer,
  bookings: bookingsReducer 
})

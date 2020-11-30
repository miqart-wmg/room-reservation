import { combineReducers } from "redux";
import bookingsReducer from "./bookings.reducer";
import roomsReducer from "./rooms.reducer";
import visitorsReducer from "./visitors.reducer";

export default combineReducers({
  rooms: roomsReducer,
  bookings: bookingsReducer,
  visitors: visitorsReducer, 
})

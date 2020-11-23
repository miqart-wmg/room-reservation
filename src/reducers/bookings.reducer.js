const initialState = {
  gettingStatus: false,
  status: {
    rooms: 0,
    booking: 0,
    visitors: 0
  },
  gettingData: false,
  rooms: [],
  bookings: [],
  visitors: []
};

export default function bookingsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_BOOKINGS_REQUEST':
      return {
        ...state,
        gettingData: true
      }

    case 'GET_BOOKINGS_SUCCESS':
      return {
        ...state,
        gettingData: false,
        bookings: action.payload
      }

    case 'GET_BOOKINGS_FAILURE':
      return {
        ...state,
        gettingData: false
      }

    case 'CREATE_BOOKING_REQUEST':    
      return state;

    case 'CREATE_BOOKING_SUCCESS':
      return {
        ...state,
        bookings: [...state.bookings, action.payload]
      }

    case 'CREATE_BOOKING_FAILURE':
      return state;

    case 'REMOVE_BOOKING_REQUEST':    
      return state;

    case 'REMOVE_BOOKING_SUCCESS':
      return {
        ...state,
        bookings: state.bookings.filter(booking => booking.id !== action.payload)
      }

    case 'REMOVE_BOOKING_FAILURE':
      return state;

    case 'EDIT_BOOKING_REQUEST':    
      return state;

    case 'EDIT_BOOKING_SUCCESS':
      return {
        ...state,
        bookings: state.bookings.map(booking => {
          if(booking.id === action.payload.id) {
            return action.payload
          }else {
            return booking
          }
        })
      }

    case 'EDIT_BOOKING_FAILURE':
      return state;

    default:
      return state
  }
}
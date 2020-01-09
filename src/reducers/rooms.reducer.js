const initialState = {
  gettingStatus: false,
  status: {
    rooms: 0,
    booking: 0,
    visitors: 0
  },
  gettingRooms: false,
  rooms: [],
  bookings: [],
  visitors: []
};

export default function roomsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_STATUS_REQUEST':
      return {
        ...state,
        gettingStatus: true
      }

    case 'GET_STATUS_SUCCESS':
      return {
        ...state,
        gettingStatus: false,
        status: action.payload
      }

    case 'GET_STATUS_FAILURE':
      return {
        ...state,
        gettingStatus: false
      }

    case 'GET_ROOMS_REQUEST':
      return {
        ...state,
        gettingRooms: true
      }

    case 'GET_ROOMS_SUCCESS':
      return {
        ...state,
        gettingRooms: false,
        rooms: action.payload
      }

    case 'GET_ROOMS_FAILURE':
      return {
        ...state,
        gettingRooms: false
      }

    case 'CREATE_ROOM_REQUEST':    
      return {
        ...state
      }

    case 'CREATE_ROOM_SUCCESS':
      return {
        ...state,
        rooms: [...state.rooms, action.payload]
      }

    case 'CREATE_ROOM_FAILURE':
      return {
        ...state
      }

    case 'REMOVE_ROOM_REQUEST':    
      return {
        ...state
      }

    case 'REMOVE_ROOM_SUCCESS':
      return {
        ...state,
        rooms: state.rooms.filter(room => room.id !== action.payload)
      }

    case 'REMOVE_ROOM_FAILURE':
      return {
        ...state
      }

    case 'EDIT_ROOM_REQUEST':    
      return {
        ...state
      }

    case 'EDIT_ROOM_SUCCESS':
      return {
        ...state
        //... 
      }

    case 'EDIT_ROOM_FAILURE':
      return {
        ...state
      }

    default:
      return state
  }
}
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

export default function visitorsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_VISITORS_REQUEST':
      return {
        ...state,
        gettingData: true
      }

    case 'GET_VISITORS_SUCCESS':
      return {
        ...state,
        gettingData: false,
        visitors: action.payload
      }

    case 'GET_VISITORS_FAILURE':
      return {
        ...state,
        gettingData: false
      }

    case 'CREATE_VISITOR_REQUEST':    
      return state;

    case 'CREATE_VISITOR_SUCCESS':
      return {
        ...state,
        visitors: [...state.visitors, action.payload]
      }

    case 'CREATE_VISITOR_FAILURE':
      return state;

    case 'REMOVE_VISITOR_REQUEST':    
      return state;

    case 'REMOVE_VISITOR_SUCCESS':
      return {
        ...state,
        visitors: state.visitors.filter(visitor => visitor.id !== action.payload)
      }

    case 'REMOVE_VISITOR_FAILURE':
      return state;

    case 'EDIT_VISITOR_REQUEST':    
      return state;

    case 'EDIT_VISITOR_SUCCESS':
      return {
        ...state,
        visitors: state.visitors.map(visitor => {
          if(visitor.id === action.payload.id) {
            return action.payload
          }else {
            return visitor
          }
        })
      }

    case 'EDIT_VISITOR_FAILURE':
      return state;

    default:
      return state
  }
}
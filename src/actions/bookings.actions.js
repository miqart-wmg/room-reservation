export const getBookingsRequest = () => ({
  type: 'GET_BOOKINGS_REQUEST'
})

export const getBookingsSuccess = (data) => ({
  type: 'GET_BOOKINGS_SUCCESS',
  payload: data
})

export const getBookingsFailure = () => ({
  type: 'GET_BOOKINGS_FAILURE'
})

export const createBookingRequest = () => ({
  type: 'CREATE_BOOKING_REQUEST'
})

export const createBookingSuccess = (data) => ({
  type: 'CREATE_BOOKING_SUCCESS',
  payload: data
})

export const createBookingFailure = () => ({
  type: 'CREATE_BOOKING_FAILURE'
})

export const removeBookingRequest = () => ({
  type: 'REMOVE_BOOKING_REQUEST'
})

export const removeBookingSuccess = (data) => ({
  type: 'REMOVE_BOOKING_SUCCESS',
  payload: data
})

export const removeBookingFailure = () => ({
  type: 'REMOVE_BOOKING_FAILURE'
})

export const editBookingRequest = () => ({
  type: 'EDIT_BOOKING_REQUEST'
})

export const editBookingSuccess = (data) => ({
  type: 'EDIT_BOOKING_SUCCESS',
  payload: data
})

export const editBookingFailure = () => ({
  type: 'EDIT_BOOKING_FAILURE'
})
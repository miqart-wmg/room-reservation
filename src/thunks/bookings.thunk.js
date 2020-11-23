import api from '../API';
import { getBookingsRequest, getBookingsSuccess, getBookingsFailure,
         createBookingRequest, createBookingSuccess, createBookingFailure,
         removeBookingRequest, removeBookingSuccess, removeBookingFailure,
         editBookingRequest, editBookingSuccess, editBookingFailure
        } from '../actions';

export const getBookingsThunk = () => async (dispatch) => {
  try {
    dispatch(getBookingsRequest());
    const response = await api.bookings.get({id: undefined});  
    if (response.status !== 200) {
      throw new Error('Can not get Bookings')
    }
    dispatch(getBookingsSuccess(response.data));
  } catch (error) {
    dispatch(getBookingsFailure());
  }
}

export const createBookingThunk = (data) => async (dispatch) => {
  try {
    dispatch(createBookingRequest());
    const response = await api.bookings.post(data);
    
    if (response.status !== 200) {
      throw new Error('Can not create Booking')
    }
    dispatch(createBookingSuccess(response.data));
  } catch (error) {  
    dispatch(createBookingFailure());
  }
}

export const editBookingThunk = (data) => async (dispatch) => {
  try {
    dispatch(editBookingRequest());
    const response = await api.bookings.put(data);
    
    if (response.status !== 200) {
      throw new Error('Can not edit Booking')
    }
    dispatch(editBookingSuccess(response.data));
  } catch (error) {  
    dispatch(editBookingFailure());
  }
}

export const removeBookingThunk = (id) => async (dispatch) => {
  try {
    dispatch(removeBookingRequest());
    
    const response = await api.bookings.delete({uriParams: {id}});
    
    if (response.status !== 200) {
      throw new Error('This item was already deleted')
    }
    dispatch(removeBookingSuccess(id));
  } catch (error) {  
    dispatch(removeBookingFailure());
  }
}


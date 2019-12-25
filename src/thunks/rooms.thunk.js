import api from '../API';
import { getRoomsRequest, getRoomsSuccsess, getRoomsFailure, getStatusRequest, getStatusSuccsess, getStatusFailure } from '../actions';

export const getStatusThunk = () => async (dispatch) => {
  try {
    dispatch(getStatusRequest());
    const response = await api.roomsStatus.get();
    console.log("response", response);
    
    if (response.status !== 200) {
      throw new Error('Cannot get status')
    }
    dispatch(getStatusSuccsess(response.data.status));
  } catch (error) {
    dispatch(getStatusFailure());
  }
}

export const getRoomsThunk = () => async (dispatch) => {
  try {
    dispatch(getRoomsRequest());
    const response = await api.rooms.get();
    if (response.status !== 200) {
      throw new Error('Cannot get Rooms')
    }
    dispatch(getRoomsSuccsess(response.data));
  } catch (error) {
    dispatch(getRoomsFailure());
  }
}


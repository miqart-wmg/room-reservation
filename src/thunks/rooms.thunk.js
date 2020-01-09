import api from '../API';
import { getRoomsRequest, getRoomsSuccess, getRoomsFailure, 
         getStatusRequest, getStatusSuccess, getStatusFailure, 
         createRoomRequest, createRoomSuccess, createRoomFailure,
         removeRoomRequest, removeRoomSuccess, removeRoomFailure,
         editRoomRequest, editRoomSuccess, editRoomFailure
        } from '../actions';

export const getStatusThunk = () => async (dispatch) => {
  try {
    dispatch(getStatusRequest());
    const response = await api.roomsStatus.get();
    if (response.status !== 200) {
      throw new Error('Can not get status')
    }
    dispatch(getStatusSuccess(response.data.status));
  } catch (error) {
    dispatch(getStatusFailure());
  }
}

export const getRoomsThunk = () => async (dispatch) => {
  try {
    dispatch(getRoomsRequest());
    const response = await api.rooms.get({id: undefined});  

    if (response.status !== 200) {
      throw new Error('Can not get Rooms')
    }
    dispatch(getRoomsSuccess(response.data));
  } catch (error) {
    dispatch(getRoomsFailure());
  }
}

export const createRoomThunk = (data) => async (dispatch) => {
  try {
    dispatch(createRoomRequest());
    const response = await api.rooms.post(data);
    
    if (response.status !== 200) {
      throw new Error('Can not create Room')
    }
    dispatch(createRoomSuccess(response.data));
    dispatch(getStatusThunk())
  } catch (error) {  
    dispatch(createRoomFailure());
  }
}

export const editRoomThunk = (id, data) => async (dispatch) => {
  try {
    dispatch(editRoomRequest());
    const response = await api.rooms.put(id, data);
    
    if (response.status !== 200) {
      throw new Error('Can not create Room')
    }
    dispatch(editRoomSuccess(response.data));
    dispatch(getStatusThunk())
  } catch (error) {  
    dispatch(editRoomFailure());
  }
}

export const removeRoomThunk = (id) => async (dispatch) => {
  try {
    dispatch(removeRoomRequest());
    
    const response = await api.rooms.delete({uriParams: {id}});
    
    if (response.status !== 200) {
      throw new Error('This item was already deleted')
    }
    dispatch(removeRoomSuccess(id));
    dispatch(getStatusThunk())
  } catch (error) {  
    dispatch(removeRoomFailure());
  }
}


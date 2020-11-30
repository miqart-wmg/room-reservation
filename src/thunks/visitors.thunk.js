import api from '../API';
import { getVisitorsRequest, getVisitorsSuccess, getVisitorsFailure,
         createVisitorRequest, createVisitorSuccess, createVisitorFailure,
         removeVisitorRequest, removeVisitorSuccess, removeVisitorFailure,
         editVisitorRequest, editVisitorSuccess, editVisitorFailure
        } from '../actions';

export const getVisitorsThunk = () => async (dispatch) => {
  try {
    dispatch(getVisitorsRequest());
    const response = await api.visitors.get({id: undefined});  
    if (response.status !== 200) {
      throw new Error('Can not get Visitors')
    }
    dispatch(getVisitorsSuccess(response.data));
  } catch (error) {
    dispatch(getVisitorsFailure());
  }
}

export const createVisitorThunk = (data) => async (dispatch) => {
  try {
    dispatch(createVisitorRequest());
    const response = await api.visitors.post(data);
    
    if (response.status !== 200) {
      throw new Error('Can not create Visitor')
    }
    dispatch(createVisitorSuccess(response.data));
  } catch (error) {  
    dispatch(createVisitorFailure());
  }
}

export const editVisitorThunk = (data) => async (dispatch) => {
  try {
    dispatch(editVisitorRequest());
    const response = await api.visitors.put(data);
    
    if (response.status !== 200) {
      throw new Error('Can not edit Visitor')
    }
    dispatch(editVisitorSuccess(response.data));
  } catch (error) {  
    dispatch(editVisitorFailure());
  }
}

export const removeVisitorThunk = (id) => async (dispatch) => {
  try {
    dispatch(removeVisitorRequest());
    
    const response = await api.visitors.delete({uriParams: {id}});
    
    if (response.status !== 200) {
      throw new Error('This item was already deleted')
    }
    dispatch(removeVisitorSuccess(id));
  } catch (error) {  
    dispatch(removeVisitorFailure());
  }
}


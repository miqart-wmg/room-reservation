export const getStatusRequest = () => ({
  type: 'GET_STATUS_REQUEST'
})

export const getStatusSuccess = (data) => {

  return {
    type: 'GET_STATUS_SUCCESS',
    payload: data
  }
}

export const getStatusFailure = () => ({
  type: 'GET_STATUS_FAILURE'
})

export const getRoomsRequest = () => ({
  type: 'GET_ROOMS_REQUEST'
})

export const getRoomsSuccess = (data) => ({
  type: 'GET_ROOMS_SUCCESS',
  payload: data
})

export const getRoomsFailure = () => ({
  type: 'GET_ROOMS_FAILURE'
})

export const createRoomRequest = () => ({
  type: 'CREATE_ROOM_REQUEST'
})

export const createRoomSuccess = (data) => ({
  type: 'CREATE_ROOM_SUCCESS',
  payload: data
})

export const createRoomFailure = () => ({
  type: 'CREATE_ROOM_FAILURE'
})

export const removeRoomRequest = () => ({
  type: 'REMOVE_ROOM_REQUEST'
})

export const removeRoomSuccess = (data) => ({
  type: 'REMOVE_ROOM_SUCCESS',
  payload: data
})

export const removeRoomFailure = () => ({
  type: 'REMOVE_ROOM_FAILURE'
})

export const editRoomRequest = () => ({
  type: 'EDIT_ROOM_REQUEST'
})

export const editRoomSuccess = (data) => ({
  type: 'EDIT_ROOM_SUCCESS',
  payload: data
})

export const editRoomFailure = () => ({
  type: 'EDIT_ROOM_FAILURE'
})
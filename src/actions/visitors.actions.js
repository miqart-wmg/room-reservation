export const getVisitorsRequest = () => ({
  type: 'GET_VISITORS_REQUEST'
})

export const getVisitorsSuccess = (data) => ({
  type: 'GET_VISITORS_SUCCESS',
  payload: data
})

export const getVisitorsFailure = () => ({
  type: 'GET_VISITORS_FAILURE'
})

export const createVisitorRequest = () => ({
  type: 'CREATE_VISITOR_REQUEST'
})

export const createVisitorSuccess = (data) => ({
  type: 'CREATE_VISITOR_SUCCESS',
  payload: data
})

export const createVisitorFailure = () => ({
  type: 'CREATE_VISITOR_FAILURE'
})

export const removeVisitorRequest = () => ({
  type: 'REMOVE_VISITOR_REQUEST'
})

export const removeVisitorSuccess = (data) => ({
  type: 'REMOVE_VISITOR_SUCCESS',
  payload: data
})

export const removeVisitorFailure = () => ({
  type: 'REMOVE_VISITOR_FAILURE'
})

export const editVisitorRequest = () => ({
  type: 'EDIT_VISITOR_REQUEST'
})

export const editVisitorSuccess = (data) => ({
  type: 'EDIT_VISITOR_SUCCESS',
  payload: data
})

export const editVisitorFailure = () => ({
  type: 'EDIT_VISITOR_FAILURE'
})
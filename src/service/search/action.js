import axios from "axios";
import actionType from "./actionType";
import URL from '../../asset/configUrl'


export const listInfo = () => dispatch => {
  return axios.get(URL.GET_CONTRACT).then(response => {

      return dispatch({
          type: actionType.LIST_SUCCESS,
          data: response.data
      })
  })
};


export const updateUser = (data) => dispatch => {

   return axios.post(URL.UPDATE_CONTRACT ,data).then(response => {
    dispatch(listInfo())
      return dispatch({
          type: actionType.UPDATE_USER,
          data: response.data
      })
  })
};

export const addUser = (data) => dispatch => {

  return axios.post(URL.ADD_CONTRACT ,data).then(response => {
   dispatch(listInfo())
     return dispatch({
         type: actionType.UPDATE_USER,
         data: response.data
     })
 })
};

export const deleteUser = (data) => dispatch => {

  return axios.post(URL.DELETE_CONTRACT ,data).then(response => {
   dispatch(listInfo())
     return dispatch({
         type: actionType.UPDATE_USER,
         data: response.data
     })
 })
};

export const mailSchedule = (data) => dispatch => {

  return axios.post(URL.SCHEDULE_MAIL ,data).then(response => {
   dispatch(listInfo())
     return dispatch({
         type: actionType.UPDATE_USER,
         data: response.data
     })
 })
};



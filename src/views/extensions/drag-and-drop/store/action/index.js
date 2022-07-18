import axios from 'axios'

// ** Get data
export const getData = params => {
  return dispatch => {
    axios.get('http://localhost:9000/boards/getboards', {params}).then(response => {
      dispatch({
        type: 'GET_DATA',
        data: response.data,
        length:response.data.length
      })
    })
  }
}
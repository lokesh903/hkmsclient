import axios from 'axios'

// ** Get data
export const getData = params => {
  return dispatch => {
    axios.get('http://localhost:9000/project/showprojects', {params}).then(response => {
      console.log(response.data)
      dispatch({
        type: 'GET_DATA',
        allData: response.data.allData,
        data: response.data.projects,
        totalPages: response.data.total,
        params
      })
    })
  }
}

// ** Delete Invoice
export const deleteInvoice = id => {
  return (dispatch, getStore) => {
    axios
      .delete('/apps/invoice/delete', { id })
      .then(response => {
        dispatch({
          type: 'DELETE_INVOICE'
        })
      })
      .then(() => dispatch(getData(getStore().invoice.params)))
  }
}

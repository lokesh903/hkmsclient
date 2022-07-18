const initialState = {
    data : [],
    lenght: 0
  }
  
  const boardReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_DATA':
        return {
          ...state,
          data:action.data,
          lenght:action.lenght
        }
      case 'DELETE_INVOICE':
        return { ...state }
      default:
        return { ...state }
    }
  }
  export default boardReducer
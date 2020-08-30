const initialState = {
  isLoading: true,
  isError: false,
  data: {}
}

const fetchRandomCode  = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CODE_PENDING':
      return {
        ...state,
        isError: false,
        isLoading: true,
      }
      case 'FETCH_CODE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      }
    case 'FETCH_CODE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
};

export default fetchRandomCode

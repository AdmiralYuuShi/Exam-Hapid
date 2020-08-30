const initialState = {
  isLoading: true,
  isError: false,
  data: {},
  error: {}
}

const sendRandomCode  = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_CODE_PENDING':
      return {
        ...state,
        isError: false,
        isLoading: true,
      }
      case 'SEND_CODE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
        error: {}
      }
    case 'SEND_CODE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        error: action.payload.response
      }
    default:
      return state
  }
};

export default sendRandomCode

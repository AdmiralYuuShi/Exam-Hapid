const initialState = {
  isLoading: false,
  isError: false,
  data: {},
  error: {}
}

const sendImageList  = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_IMAGE_LIST_PENDING':
      return {
        ...state,
        isError: false,
        isLoading: true,
      }
      case 'SEND_IMAGE_LIST_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
        error: {}
      }
    case 'SEND_IMAGE_LIST_REJECTED':
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

export default sendImageList

import axios from 'axios';

export const fetchCode = _ => ({
  type: 'FETCH_CODE',
  payload: axios.get('https://dev.dispenda.online/api/get-random-code'),
});

export const sendCode = (code) => {
  const formData = new FormData()
  formData.append('code', code)
  return {
    type: 'SEND_CODE',
    payload: axios.post('https://dev.dispenda.online/api/post-screen-1', formData),
  }
}

// => ({
//   type: 'SEND_CODE',
//   payload: axios.post('', code),
// });
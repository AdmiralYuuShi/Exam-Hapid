import axios from 'axios';
import Config from 'react-native-config'

export const fetchCode = _ => ({
  type: 'FETCH_CODE',
  payload: axios.get(`${Config.BASE_API_URL}/get-random-code`),
});

export const sendCode = (code) => {
  const formData = new FormData()
  formData.append('code', code)
  return {
    type: 'SEND_CODE',
    payload: axios.post(`${Config.BASE_API_URL}/post-screen-1`, formData),
  }
}
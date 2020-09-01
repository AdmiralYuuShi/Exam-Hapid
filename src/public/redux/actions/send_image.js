import axios from 'axios';
import Config from 'react-native-config'

export const sendImage = (nameValue, imgList) => {

  let formData = new FormData()
  formData.append('name', nameValue)
  imgList.forEach(img => {
    formData.append('images[]', {
      uri: img.uri,
      type: img.type,
      name: img.fileName
    })
  });

  return {
    type: 'SEND_IMAGE_LIST',
    payload: axios.post(`${Config.BASE_API_URL}/post-screen-2`, formData, { headers: { 'Content-Type': 'multipart/form-data' }}),
  }
}
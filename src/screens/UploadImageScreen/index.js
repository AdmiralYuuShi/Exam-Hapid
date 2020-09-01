import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, Image, View, ToastAndroid, Alert } from 'react-native';
import { styles } from './style';
import ImagePicker from 'react-native-image-picker';
import AppDimens from '../../components/shared/AppDimens';
import { CustomButton } from '../../components/shared/CustomButton';
import { sendImage } from '../../public/redux/actions/send_image';
import { useDispatch, useSelector } from 'react-redux';

const UploadImageScreen = () => {

  const dispatch = useDispatch()

  const [nameValue, setNameValue] = useState('')
  const [imageList, setImageList] = useState([])
  const sendImageState = useSelector(state => state.sendImageList)

  const sendImageList = () => {
    dispatch(sendImage(nameValue, imageList))
      .then((res) => {
        showAlertMessage(res)
        setNameValue('')
        setImageList([])
      })
      .catch((e) => showAlertMessage())
  }

  showImagePicker = () => ImagePicker.showImagePicker({
    title: 'Add Image'
  }, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.warn('User cancelled image picker');
    } else if (response.error) {
      ToastAndroid.showWithGravityAndOffset(
        response.error,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        20,
      )
    } else {
      if (response.type === 'image/jpg' || response.type === 'image/jpeg' || response.type === 'image/png') {
        if (response.fileSize <= 2048000) {
          setImageList(oldData => [...oldData, response])
        } else {
          ToastAndroid.showWithGravityAndOffset(
            'Maximum file size is 2 MB',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            20,
          )
        }
      } else {
        ToastAndroid.showWithGravityAndOffset(
          'Image must be JPG or PNG',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          20,
        )
      }
    }
  });

  const showAlertMessage = (res) => {
    if (!sendImageState.isError) {
      Alert.alert(
        res.value.data.status,
        res.value.data.message.text[0],
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
      )
    } else {
      if (sendImageState.error.status == 422) {
        Alert.alert(
          sendImageState.error.data.status,
          sendImageState.error.data.message.name[0],
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
        )
      } else {
        Alert.alert(
          'error',
          'Internal Server Error',
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
        )
      }
    }
  }

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.textBlack28}>Name</Text>
      <AppDimens height={63} />
      <TextInput
        style={styles.nameForm}
        onChangeText={text => setNameValue(text)}
        value={nameValue}
        keyboardType='default'
        maxLength={50}
        placeholder='Input name'
      />
      <AppDimens height={63} />
      <Text style={styles.textBlack28}>Gambar</Text>
      <AppDimens height={63} />
      <View style={{ flexDirection: 'row' }}>
        {imageList.map((img, i) => <Image key={i} source={{ uri: img.uri }} style={{ width: 56, height: 56, marginRight: 10 }} />
        )}
        {(imageList.length < 4) ? <CustomButton buttonStyle={styles.addImageButton} textStyle={styles.textWhite56} text='+' onPress={() => showImagePicker()} /> : <View />}
      </View>
      <AppDimens height={63} />
      <CustomButton text={sendImageState.isLoading ? 'Loading' : 'SUBMIT'} buttonStyle={styles.submitButton} textStyle={styles.submitButtonText} onPress={() => sendImageState.isLoading ? console.log('loading') : sendImageList()} />
    </SafeAreaView>
  );
}

export default UploadImageScreen
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './style';
import AppDimens from '../../components/shared/AppDimens';
import { CustomButton } from '../../components/shared/CustomButton';
import { fetchCode, sendCode } from '../../public/redux/actions/random_code';

const RandomCodeScreen = ({ navigation }) => {

  const dispatch = useDispatch()

  const [codeValue, setCodeValue] = useState(null)
  const fetchCodeState = useSelector(state => state.fetchRandomCode)
  const sendCodeState = useSelector(state => state.sendRandomCode)

  useEffect(() => {
    console.warn('Initial Code Fetch')
    fetchRandomCode()
  }, [])

  useEffect(() => {
    if (sendCodeState.error.status === 403) {
      fetchRandomCode()
    }
  }, [sendCodeState])

  const fetchRandomCode = () => {
    dispatch(fetchCode())
  }

  const sendRandomCode = () => {
    dispatch(sendCode(codeValue))
      .then(() => navigation.navigate('UploadImageScreen'))
      .catch((e) => console.error(e))
  }

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.textBlack28}>Random Code</Text>
      <AppDimens height={63} />
      <View style={styles.randomCode}>
        {fetchCodeState.isLoading ?
          <Text style={styles.textWhite28}>Loading</Text>
          :
          <Text style={styles.textWhite28}>{fetchCodeState.data.data.code}</Text>
        }
      </View>
      <AppDimens height={63} />
      <Text style={styles.textBlack28}>Input Code</Text>
      {sendCodeState.isError ?
        <View style={styles.alertMessage}>
          <Text style={styles.textAlert}>{sendCodeState.error.data.message.code[0]}</Text>
        </View>
        :
        <AppDimens height={63} />
      }
      <TextInput
        style={styles.codeForm}
        onChangeText={text => setCodeValue(text)}
        value={codeValue}
        keyboardType='numeric'
        textAlign='center'
        maxLength={4}
        placeholder='Input the code above'
      />
      <AppDimens height={63} />
      <CustomButton text='SUBMIT' buttonStyle={styles.submitButton} textStyle={styles.submitButtonText} onPress={() => sendRandomCode()} />
    </SafeAreaView>
  );
}

export default RandomCodeScreen
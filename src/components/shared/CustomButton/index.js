import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const CustomButton = ({ text = 'Custom Button', onPress, buttonStyle, textStyle }) => {

  return (
      <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.7}>
        <Text style={textStyle}> {text} </Text>
      </TouchableOpacity>
  )
}
export { CustomButton }
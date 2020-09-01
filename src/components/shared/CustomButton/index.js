import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const CustomButton = ({ text = 'Custom Button', onPress, buttonStyle, textStyle, width, height }) => {

  return (
      <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.7} width={width} height={height}>
        <Text style={textStyle}> {text} </Text>
      </TouchableOpacity>
  )
}
export { CustomButton }
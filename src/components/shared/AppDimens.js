import React from 'react';
import { View } from 'react-native';
import { appColor } from '../../public/configs';

const AppDimens = ({height, width, color= appColor.transparent}) => {
  return (
      <View style={{height: height, width: width, backgroundColor: color, alignSelf: 'stretch'}} />
  );
}

export default AppDimens
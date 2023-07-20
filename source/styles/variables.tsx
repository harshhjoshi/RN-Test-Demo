import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

// responsive
const responsiveHeight = (h: any) => {
  return deviceHeight * (h / 100);
};
const responsiveWidth = (w: any) => {
  return deviceWidth * (w / 100);
};

//component colors are decalred in capital
//All Colors
const colors = {
  primary:"#2F80ED",
  white:"#FFFFFF"
};

// font family
const fontFamily = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold'
};

let fontSize: any = {
  extraSmall: 12,
  small: 14,
  normal: 16,
  medium: 18,
  semiLarge: 22,
  large: 24,
};


export {
  responsiveHeight,
  responsiveWidth,
  deviceHeight,
  deviceWidth,
  colors,
  fontSize,
  fontFamily,
};

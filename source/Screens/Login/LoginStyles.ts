import { Platform, StyleSheet } from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../styles/variables';

const styles = StyleSheet.create({
  container: {flex: 1},
  imageBackCotainer:{
    flex: 1,
    justifyContent: 'center',
  },
  childContainer:{
    flex: 1,
    justifyContent: 'center',
  },
  child2Container:{
    width: responsiveWidth(90),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderBottomEndRadius: 40,
    borderTopStartRadius: 40,
    elevation: 5,
    padding: 20,
    maxHeight: responsiveHeight(80),
  },
  logoImage: {
    height: responsiveHeight(15),
    width: responsiveWidth(60),
    alignSelf: 'center',
  },
  countryContainer:{
    height: responsiveHeight(6),
    width: responsiveWidth(75),
    backgroundColor:colors.white,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor:colors.primary,
    alignSelf: 'center',
  },
  countryPicker:{
    top: Platform.OS === 'ios' ? 2 : '15%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  textinputPhone:{
    height:
      Platform.OS === 'ios' ? responsiveHeight(5) : undefined,
    width: responsiveWidth(75),
    alignSelf: 'center',
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    marginTop: 10,
    color: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingStart: 10,
    borderColor: colors.primary,
  },
  textPrimaryAddress:{
    height:
      Platform.OS === 'ios' ? responsiveHeight(5) : undefined,
    width: responsiveWidth(75),
    alignSelf: 'center',
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    marginTop: 10,
    color: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingStart: 10,
    borderColor:colors.primary,
  },
  textMultipleAddress:{
    height:
      Platform.OS === 'ios' ? responsiveHeight(5) : undefined,
    width: responsiveWidth(75),
    alignSelf: 'center',
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    marginTop: 10,
    color: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingStart: 10,
    borderColor: colors.primary,
  },
  deleteButtonContainer:{
    height: responsiveHeight(6),
    width: responsiveWidth(10),
    position: 'absolute',
    end: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    top: 12,
  },
  addMoreAddressContainer:{
    height: responsiveHeight(6),
    width: responsiveWidth(60),
    borderRadius: 25,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: colors.primary,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addMoreAddressIcon:{
    height: responsiveHeight(7),
    width: responsiveWidth(7),
    resizeMode: 'stretch',
    marginEnd: 10,
  },
  addMoreAddressText:{
    fontSize: fontSize.normal,
    fontFamily: fontFamily.medium,
    textAlign: 'center',
    color: colors.primary,
  },
  forgetPasswordText:{
    fontSize: fontSize.small,
    fontFamily: fontFamily.medium,
    textAlign: 'right',
    color:colors.primary,
    marginEnd: 20,
    marginTop: 10,
    elevation: 5,
  },
  textinput: {
    height: Platform.OS === "ios" ? responsiveHeight(5) : undefined,
    width: responsiveWidth(75),
    alignSelf: 'center',
    // borderBottomColor: colors.gray10,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    marginTop: 10,
    color: colors.primary,
    borderWidth:1,
    borderRadius:5,
    paddingStart:10,
    borderColor:colors.primary
  },
  btn: {
    height: responsiveHeight(7),
    width: responsiveWidth(90),
    borderBottomStartRadius: 35,
    borderTopEndRadius:35,
    justifyContent: 'center',
    alignSelf: "center",
    backgroundColor:"#639FF1",
    borderWidth:1,
    borderColor:colors.primary,
    marginTop:10,
    elevation:5
  },
  buttonText: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
    color: colors.white
  },
  deleteIcon:{
    height: responsiveHeight(8),
    width: responsiveWidth(8),
    position: 'absolute',
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});

export { styles };
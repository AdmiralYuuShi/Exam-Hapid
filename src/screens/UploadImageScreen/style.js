import { appColor } from "../../public/configs";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 15
  },
  textBlack28: {
    color: appColor.black,
    fontSize: 28,
  },
  textWhite56: {
    color: appColor.white,
    fontSize: 56,
  },
  addImageButton: {
    height: 56,
    width: 56,
    backgroundColor: appColor.red,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButton: {
    backgroundColor: appColor.red,
    borderRadius: 25,
    height: 56,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  submitButtonText: {
    color: appColor.white,
    fontSize: 16,
    textAlign: 'center',
  },
  nameForm: {
    height: 56,
    borderColor: appColor.blue,
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'stretch',
    paddingHorizontal: 20
  },
  textAlert: {
    color: appColor.white,
    fontSize: 18,
    textAlign: 'center',
  },
})


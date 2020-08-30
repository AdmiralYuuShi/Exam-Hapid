import { appColor } from "../../public/configs";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  randomCode: {
    backgroundColor: appColor.blue,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  textBlack28: {
    color: appColor.black,
    fontSize: 28,
    textAlign: 'center',
  },
  textWhite28: {
    color: appColor.white,
    fontSize: 28,
    textAlign: 'center',
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
  codeForm: {
    height: 56,
    borderColor: appColor.blue,
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'stretch'
  },
  alertMessage: {
    backgroundColor: appColor.yellow,
    height: 43,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    justifyContent: 'center',
  },
  textAlert: {
    color: appColor.white,
    fontSize: 18,
    textAlign: 'center',
  },
})


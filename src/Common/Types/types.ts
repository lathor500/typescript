import {StyleProp, ViewStyle} from 'react-native';

export interface CommonButton {
  onPress: () => void;
  title: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  marginTop?: number;
}

export interface FormValues {
  password: any;
  confirmpassword: any;
  //   handlechange: () => void;
}
export interface RegistrationValues {
  firstname: string;
  lastname: string;
  email: string;
  pincode: any;
  age: any;
  phonenumber: any;
}

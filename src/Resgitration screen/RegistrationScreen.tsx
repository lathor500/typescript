import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik, FormikProps} from 'formik';
import * as Yup from 'yup';
import Styles from './RegistrationscreenStyle';
import {Button} from '../Common/CommonButton';
import Strings from '../contants/LocalizedStrings';
import {RegistrationValues} from '../Common/Types/types';
const userLoginSchema = Yup.object({
  firstname: Yup.string()
    .trim()
    .label('Firstname')
    .min(2)
    .max(50)
    .required('Please enter firstname.')
    .matches(/^([a-zA-Z]+\s)*[a-zA-Z]+$/, 'Only characters are allowed')
    .typeError('Only characters are allowed'),
  lastname: Yup.string()
    .trim()
    .label('Lastname')
    .min(2)
    .max(50)
    .required('Please enter lastname.')
    .matches(/^([a-zA-Z]+\s)*[a-zA-Z]+$/, 'Only characters are allowed')
    .typeError('Only characters are allowed'),
  age: Yup.string()
    .trim()
    .label('Age')
    .max(3)
    .required('Please enter age.')
    .typeError('Only numerals are allowed'),
  email: Yup.string()
    .trim()
    .lowercase()
    .label('Email')
    .email('Enter a valid email.')
    .required('Please enter an email.')
    .max(50),
  phone: Yup.string()
    .trim()
    .lowercase()
    .label('Phone')
    .required('Please enter phone number.')
    .max(13)
    .matches(/^[0-9]{10}$/, 'Invalid phone number'),
  pincode: Yup.string()
    .trim()
    .lowercase()
    .label('pincode')
    .required('Please enter pincode.')
    .max(6)
    .matches(/^[0-9]{10}$/, 'Invalid pincode number'),
});
console.log('userrrr', userLoginSchema);
interface Props {
  navigation: any;
  navigate: any;
}

export default class RegistrationScreen extends Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  initialvalues: RegistrationValues = {
    firstname: '',
    lastname: '',
    email: '',
    pincode: '',
    phonenumber: '',
    age: '',
  };
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View style={Styles.container}>
          <Text style={Styles.title}>Extentia Assignment!!!!</Text>
          <Formik
            validateOnChange={true}
            onSubmit={values => console.log(values)}
            initialValues={this.initialvalues}
            validationSchema={userLoginSchema}
            render={(props: FormikProps<RegistrationValues>) => {
              return (
                <View
                  style={{
                    padding: 20,
                  }}>
                  <Text style={Styles.Text}>{Strings.FIRST_NAME}</Text>
                  <TextInput
                    style={Styles.TextInput}
                    placeholder="FIRST NAME"
                    onChangeText={props.handleChange('firstname')}
                    onBlur={props.handleBlur('firstname')}
                    value={props?.values?.firstname}
                  />
                  {props.errors.firstname && props.touched.firstname && (
                    <Text style={Styles.errorText}>
                      {props.errors.firstname}
                    </Text>
                  )}
                  <Text style={Styles.Text}>{Strings.LAST_NAME}</Text>
                  <TextInput
                    style={Styles.TextInput}
                    placeholder="LAST NAME"
                    onChangeText={props.handleChange('lastname')}
                    onBlur={props.handleBlur('lastname')}
                    value={props?.values?.lastname}
                  />
                  {props.errors.lastname && props.touched.lastname && (
                    <Text
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={Styles.errorText}>
                      {props.errors.lastname}
                    </Text>
                  )}
                  <Text style={Styles.Text}>{Strings.emal}</Text>
                  <TextInput
                    style={Styles.TextInput}
                    placeholder="Email"
                    keyboardType={'email-address'}
                    onChangeText={props.handleChange('email')}
                    value={props?.values?.email}
                    autoCapitalize="none"
                  />
                  {props.errors.email && props.touched.email && (
                    <Text style={Styles.errorText}>{props.errors.email}</Text>
                  )}
                  <Text style={Styles.Text}>{Strings.phonenumber}</Text>
                  <TextInput
                    style={Styles.TextInput}
                    placeholder="phone number"
                    onChangeText={props.handleChange('phonenumber')}
                    value={props?.values?.phonenumber}
                    keyboardType="number-pad"
                    maxLength={10}
                    autoCapitalize="none"
                  />
                  {props.errors.phonenumber && props.touched.phonenumber && (
                    <Text style={Styles.errorText}>
                      {props.errors.phonenumber}
                    </Text>
                  )}
                  <Text style={Styles.Text}>{Strings.age}</Text>
                  <TextInput
                    style={Styles.TextInput}
                    placeholder="AGE"
                    onChangeText={props.handleChange('age')}
                    // onBlur={formProps.handleBlur('email')}
                    value={props?.values?.age}
                    keyboardType="number-pad"
                    maxLength={3}
                    autoCapitalize="none"
                  />
                  {props.errors.age && props.touched.age && (
                    <Text style={Styles.errorText}>{props.errors.age}</Text>
                  )}
                  <Text style={Styles.Text}>{Strings.pincode}</Text>
                  <TextInput
                    style={Styles.TextInput}
                    placeholder="PINCODE"
                    onChangeText={props.handleChange('pincode')}
                    value={props?.values?.pincode}
                    keyboardType="number-pad"
                    maxLength={6}
                    autoCapitalize="none"
                  />
                  {props.errors.pincode && props.touched.pincode && (
                    <Text style={Styles.errorText}>{props.errors.pincode}</Text>
                  )}
                  <TouchableOpacity
                    onPress={props.handleSubmit}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      height: 60,
                      width: 160,
                      backgroundColor: 'pink',
                      alignSelf: 'center',
                      marginTop: 40,
                      justifyContent: 'center',
                      borderRadius: 16,
                    }}>
                    <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
                      {Strings.submit}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          <Button
            backgroundColor={'pink'}
            title={'PASSWORD GENERATOR'}
            onPress={() => navigation.navigate('PasswordGenerator')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

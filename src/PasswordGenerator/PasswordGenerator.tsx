/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik, FormikProps } from 'formik';
import Styles from './PasswordGeneratorStyle';
import Validator from './validator';
import { FormValues } from '../Common/Types/types'
import Strings from '../contants/LocalizedStrings'
const validator = new Validator();
interface Props {
    navigation: any
}
export default class RegistrationScreen extends Component<Props> {
    constructor(props: any) {
        super(props);
    }
    initialvalues: FormValues = {
        password: '',
        confirmpassword: '',

    }
    onGeneratePassword = (values: FormValues) => {
        console.log('onSubmitRegistration calling ', values);
        Alert.alert('Thanks');
    };
    render() {
        const { navigation } = this.props;
        return (
            // eslint-disable-next-line react-native/no-inline-styles
            <SafeAreaView style={{ flex: 1 }}>
                <View style={Styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Text onPress={() => navigation.goBack()} style={{ fontWeight: 'bold' }}>Go Back</Text>
                        <Text style={Styles.title}>
                           {Strings.passwordgenerate}
</Text>
                    </View>
                    {/* <View style={styles.formView}> */}
                    <Formik
                        validateOnChange={true}
                        onSubmit={this.onGeneratePassword}
                        initialValues={this.initialvalues}
                        validationSchema={validator.passwordvalidation}
                        render={(props: FormikProps<FormValues>) => {
                            return (
                                <View style={{
                                    padding: 20,
                                }}>

                                    <Text style={Styles.Text}>
                                        {Strings.password}
                                 </Text>
                                    <TextInput
                                        style={Styles.TextInput}
                                        placeholder="PASSWORD"
                                        onChangeText={props.handleChange('password')}
                                        onBlur={props.handleBlur('password')}
                                        value={props?.values?.password}
                                        secureTextEntry={true}
                                    />
                                    {(props.errors.password && props.touched.password) &&
                                        <Text style={{
                                            fontSize: 10,
                                            color: 'red', marginLeft: 16,
                                        }}>{props.errors.password}</Text>
                                    }
                                    <Text style={Styles.Text}>
                                        {Strings.confirmpassword}
</Text>
                                    <TextInput
                                        style={Styles.TextInput}
                                        placeholder="CONFIRM PASSWORD"
                                        onChangeText={props.handleChange('confirmpassword')}
                                        onBlur={props.handleBlur('confirmpassword')}
                                        value={props?.values?.confirmpassword}
                                        secureTextEntry={true}
                                    // style={styles.input}
                                    // autoCapitalize="none"
                                    />
                                    {(props.errors.confirmpassword && props.touched.confirmpassword) &&
                                        <Text style={{
                                            fontSize: 10,
                                            color: 'red', marginLeft: 16,
                                        }}>{props.errors.confirmpassword}</Text>
                                    }
                                    <TouchableOpacity style={{ height: 60, width: 160, backgroundColor: 'pink', alignSelf: 'center', marginTop: 20, justifyContent: 'center', borderRadius: 16 }} onPress={props.handleSubmit}>
                                        <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>{Strings.submit}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}


/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './src/Resgitration screen/RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native';
import PasswordGenerator from './src/PasswordGenerator/PasswordGenerator';
// import Testing from './src/Testing/testing'
const Stack = createStackNavigator();

function App() {
    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{
            flex: 1,
        }}>
            <NavigationContainer>
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
                    <Stack.Screen name="PasswordGenerator" component={PasswordGenerator} />
                    {/* <Stack.Screen name="Testing" component={Testing} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
export default App;
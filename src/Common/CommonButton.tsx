/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable keyword-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity ,StyleProp, ViewStyle} from 'react-native'
import {CommonButton} from '../Common/Types/types'
const Button =(item:CommonButton)=>{
    return(
    <View style={{
        flex: 1
    }}>
        <TouchableOpacity
           onPress={item.onPress}
            style={{
                height: 60,
                width: 160,
                backgroundColor:item.backgroundColor ? item.backgroundColor : 'red',
                 alignSelf: 'center',
                  marginTop: item.marginTop ? item.marginTop : 40,
                   justifyContent: 'center',
                    borderRadius: 16
              }}
            >
            <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>{item.title}</Text>
        </TouchableOpacity>
    </View>
    )
}

export {Button};
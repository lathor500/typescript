import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput } from 'react-native';

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
}

// const Input=(props)=>{
// return(
//     <View>
//         <View>
//             <TextInput  onChangeText={props.onChangeText} placeholder={props.placeholder}/>
//         </View>
//     </View>
// )
// }
function Input(props: any) {
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                justifyContent: 'center',
                
            }}>
                <TextInput style={{
                    backgroundColor: 'pink',
                    height: 40,
                    marginHorizontal: 20
                }} onChangeText={props.onChangeText} placeholder={props.placeholder} />
            </View>
        </View>
    )
}
export default Input;
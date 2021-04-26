/* eslint-disable prettier/prettier */
import { ScaledSheet } from 'react-native-size-matters'


export default ScaledSheet.create({
    TextInput: {
        height: 40,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    Text:{
        marginTop: 20,
        marginStart: 20
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
      },
      title: {
        alignSelf: 'center',
        fontSize: 24
      },
      formView: {
        flex: 1,
        //  backgroundColor: 'grey'
      },
      errorText:{
        fontSize: 10,
        color: 'red',
        marginLeft: 16,
      },
})
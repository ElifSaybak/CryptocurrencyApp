import {StyleSheet} from 'react-native';

export const modalAlarm = theme =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: theme.orangeDarker,
      borderWidth: 3,
      borderColor: theme.greenMain,
      borderRadius: 15,
      padding: '10%',
      alignItems: 'center',
    },
    button: {
      borderRadius: 15,
      width: 130,
      height: 45,
      justifyContent: 'center',
      backgroundColor: theme.greenMain,
    },
    textStyle: {
      color: theme.white,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 5,
      marginRight: 30,
      marginLeft: 30,
      fontSize: 18,
    },
    inputStyle: {
      backgroundColor: theme.white,
      fontStyle: 'italic',
      marginVertical: 15,
      width: 200,
      height: 40,
      paddingLeft: 15,
      borderWidth: 1,
      borderColor: theme.greyDarker,
    },
  });

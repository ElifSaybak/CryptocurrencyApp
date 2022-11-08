import {StyleSheet} from 'react-native';

export const cryptoCurrencys = theme =>
  StyleSheet.create({
    searchView: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30,
      height: 50,
      width: 350,
      borderWidth: 2,
      borderRadius:15,
      borderColor: theme.orangeDarker,
    },
    searchIcon: {
      padding: 8,
      borderRadius:15,
    },
    searchInput: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 0,
      color: theme.orangeDarker,
      fontSize: 16,
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
  });

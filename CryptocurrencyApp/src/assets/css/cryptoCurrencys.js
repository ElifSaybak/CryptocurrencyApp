import {StyleSheet} from 'react-native';

export const cryptoCurrencys = theme =>
  StyleSheet.create({
    searchView: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30,
      height: 50,
      width: 350,
      borderWidth: 1,
      backgroundColor: theme.white,
      borderColor: theme.blueMain,
    },
    searchIcon: {
      padding: 10,
    },
    searchInput: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 0,
      backgroundColor: theme.white,
      color: theme.greyDarker,
      fontSize: 16,
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
  });

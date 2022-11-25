import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';

import {Store} from './redux/store';
import {lightTheme} from '../src/config/theme';
import {Routes} from '../src/routes/index';
import toastConfig from './config/toast';
import reactotron from './config/reactotron';

if (__DEV__) reactotron.connect();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <ThemeProvider theme={lightTheme}>
          <SafeAreaView style={styles.container}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={lightTheme.greenMain}
            />
            <Routes />
            <Toast config={toastConfig} />
          </SafeAreaView>
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

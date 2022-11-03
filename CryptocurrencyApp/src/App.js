import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components/native';
import {Provider} from 'react-redux';
import {Store} from './redux/store';

import {lightTheme} from '../src/config/theme';
import {Routes} from '../src/routes/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={Store}>
      <ThemeProvider theme={lightTheme}>
        <SafeAreaView style={styles.container}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={lightTheme.blueLight}
          />
          <GestureHandlerRootView style={styles.container}>
            <Routes />
          </GestureHandlerRootView>
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

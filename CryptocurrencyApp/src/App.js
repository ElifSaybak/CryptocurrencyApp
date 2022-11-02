import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components/native';

import {lightTheme} from '../src/config/theme';
import {Routes} from '../src/routes/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={lightTheme}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <GestureHandlerRootView style={styles.container}>
          <Routes />
        </GestureHandlerRootView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;

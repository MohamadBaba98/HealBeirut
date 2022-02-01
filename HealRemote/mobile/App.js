/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
//Import react-native-splash-screen.
import SplashScreen from  "react-native-splash-screen";

// React Navigation Imports
import AppContainer from './src/navigation/navigator.js';

const App: () => Node = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <AppContainer />
  );
};

export default App;

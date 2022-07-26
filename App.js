import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainStackNavigation from './src/navigation'
import { store, persistor } from './src/store/configStore';


const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <MainStackNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  )
}

export default App
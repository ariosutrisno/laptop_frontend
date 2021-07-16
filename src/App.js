import React , { useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/es/integration/react';
import ConfigStore from './config/redux/_store/configStore';

 const App = () => {
  const {store, persistor} = ConfigStore();
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <PaperProvider>
                  <NavigationContainer>
                    <Router/>
                  </NavigationContainer>
            </PaperProvider>
          </PersistGate>
        </Provider>
      
    );
  };

 export default App;
 
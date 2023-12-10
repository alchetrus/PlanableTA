import React from 'react';
import {SafeAreaView} from 'react-native';
import {MainScreen} from './src/screens/MainScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NameAndEmailScreen} from './src/screens/NameAndEmailScreen.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'MainScreen'} component={MainScreen} />
          <Stack.Screen
            name={'NameAndEmailScreen'}
            component={NameAndEmailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

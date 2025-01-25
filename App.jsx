import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomePagr from './pages/HomePagr';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './pages/LandingPage';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LANDINGPAGE">
        <Stack.Screen name="HOMEPAGE" component={HomePagr} options={{
            title: '                AuriMart',
            headerStyle: {
              backgroundColor: '#6c63ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              fontFamily: 'lucida grande',
            },
          }}  />
        <Stack.Screen name="LANDINGPAGE" component={LandingPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

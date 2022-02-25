import 'react-native-gesture-handler';
import { DripsyProvider } from 'dripsy';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar'; 
import React from 'react';
import { useColorScheme } from 'react-native';
import { AppProvider } from './src/ctx';
import { DarkTheme, LightTheme } from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  const theme = useColorScheme() === "light" ? LightTheme : DarkTheme

  let [fontsLoaded] = useFonts({
    "OpenSans": require("./assets/fonts/OpenSans-Regular.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <DripsyProvider theme={theme}>
      <StatusBar style='auto'/>
      <AppProvider value={{}}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    </DripsyProvider>
  )
}


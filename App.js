import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './Components/Dashboard';
import Info from './Components/Info';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
     <NavigationContainer>

        <Stack.Navigator initialRouteName='Dashboard'>

          <Stack.Screen name='Dashboard' options={{headerShown: false}} component={Dashboard} />
          <Stack.Screen name='Info' options={{headerShown: false}} component={Info} />

        </Stack.Navigator>

     </NavigationContainer>
     
    
  );
}


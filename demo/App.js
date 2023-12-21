import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/login/login';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './src/components/welcome/welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Welcome" 
          component={Welcome}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

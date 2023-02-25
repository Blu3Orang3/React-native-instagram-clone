import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Image} from 'react-native';
import logo from '../assets/images/logo.png'

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Feed"
          component={HomeScreen}
          options={{headerTitle: HeaderTitle, headerTitleAlign: "center"}}
        />
        <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderTitle = () => {
  return (
    <Image source={logo} resizeMode="contain" style={{width: 180, height:40, marginVertical: 5}} />
  );
};

export default Navigation;

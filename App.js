import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ViewScreen from './screens/ViewScreen';
import ActivityScreen from './screens/ActivityScreen';
import OrderScreen from './screens/OrderScreen';
import RatingScreen from './screens/RatingScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: 'Cafe Restuarant', headerStyle: { backgroundColor: '#f8b400' }, headerTintColor: '#fff' }}
        />
        <Stack.Screen name="View" component={ViewScreen} options={{ title: 'View' }} />
        <Stack.Screen name="Activity" component={ActivityScreen} options={{ title: 'Activity' }} />
        <Stack.Screen name="Order" component={OrderScreen} options={{ title: 'Order' }} />
        <Stack.Screen name="Rating" component={RatingScreen} options={{ title: 'Rating' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

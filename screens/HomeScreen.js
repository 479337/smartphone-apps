import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
 
 

const Tab = createBottomTabNavigator();

const HomeComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const HomeScreen = () => {
  const [isHelpModalVisible, setHelpModalVisible] = useState(false);
  const navigation = useNavigation();
  const [showSplash, setShowSplash] = useState(true); // State to control the splash screen visibility

    useEffect(() => {
        // Hide the splash screen after 3 seconds
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    if (showSplash) {
      return (
        <Image source={require('./S.jpg')} style={styles.image2} />
      );
  }

  const toggleHelpModal = () => {
    setHelpModalVisible(!isHelpModalVisible);
  };

  return (
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to my cafe restaurant</Text>
          <TouchableOpacity onPress={toggleHelpModal} style={styles.helpIconContainer}>
            <Icon name="help-circle" type="feather" color="#000" size={24} />
          </TouchableOpacity>
          <Image source={require('./R.jpg')} style={styles.image} />
        </View>
        <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = 'home';
      } else if (route.name === 'View') {
        iconName = 'eye';
      } else if (route.name === 'Activity') {
        iconName = 'activity';
      } else if (route.name === 'Order') {
        iconName = 'list';
      }
      return <Icon name={iconName} type="feather" color={color} size={size} />;
    },
    headerShown: false,
  })}
  tabBarOptions={{
    activeTintColor: '#e91e63',
    inactiveTintColor: 'gray',
    style: { backgroundColor: 'transparent' },
  }}
>
  <Tab.Screen 
    name="Home" 
    component={HomeComponent}
    listeners={{
      tabPress: e => {
        e.preventDefault();
        navigation.navigate('Rating');  
      },
    }}
    options={{ title: 'Home' }}
  />
  <Tab.Screen 
    name="View" 
    component={EmptyScreen}
    listeners={{
      tabPress: e => {
        e.preventDefault();
        navigation.navigate('View');   
      },
    }}
    options={{ title: 'View' }}
  />
  <Tab.Screen 
    name="Activity" 
    component={EmptyScreen}
    listeners={{
      tabPress: e => {
        e.preventDefault();
        navigation.navigate('Activity');   
      },
    }}
    options={{ title: 'Activity' }}
  />
  <Tab.Screen 
    name="Order" 
    component={EmptyScreen}
    listeners={{
      tabPress: e => {
        e.preventDefault();
        navigation.navigate('Order');  // Ensure this matches your Stack Navigator screen name
      },
    }}
    options={{ title: 'Order' }}
  />
</Tab.Navigator>

      </View>
      <Modal visible={isHelpModalVisible} animationType="slide">
    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Text style={styles.modalText}>How to use the app:</Text>
            <Text style={styles.helpItem}>• Click on the <Text style={styles.boldText}>Home icon</Text> to check reviews and ratings.</Text>
            <Text style={styles.helpItem}>• Click on the <Text style={styles.boldText}>View icon</Text> to view the menu.</Text>
            <Text style={styles.helpItem}>• Click on the <Text style={styles.boldText}>Activity icon</Text> to book a game.</Text>
            <Text style={styles.helpItem}>• Click on the <Text style={styles.boldText}>Order icon</Text> to place an order.</Text>
            <TouchableOpacity onPress={toggleHelpModal} style={styles.closeModalButton}>
                <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
        </View>
    </View>
</Modal>

    </NavigationContainer>
  );
};

const EmptyScreen = () => {
  return <View />;
};
 

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  image: {
   
    width: 350,
    height: 300,
    resizeMode: 'contain',
  },
  image2: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  helpIconContainer: {
    position: 'absolute',
    top: 1,
    right: 10,
    zIndex: 1, // Ensures the help icon is above other components
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
},
modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Adjust the width of the modal content
    maxWidth: 400, // Set maximum width to prevent it from occupying the entire screen
    alignItems: 'flex-start', // Align text to the left
},
modalText: {
    fontSize: 18,
    marginBottom: 10, // Add some space before the list starts
    fontWeight: 'bold',
},
helpItem: {
    fontSize: 16,
    marginBottom: 5, // Space between items
},
boldText: {
    fontWeight: 'bold',
},
closeModalButton: {
    backgroundColor: '#e91e63',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end', // Align the close button to the right
    marginTop: 10, // Space above the close button
},
closeModalText: {
    color: '#fff',
    fontSize: 16,
},
});

export default HomeScreen;

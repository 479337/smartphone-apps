import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

const dishes = [
  { name: 'Spaghetti Carbonara', price: '$12', icon: 'food-fork-drink' },
  { name: 'Margherita Pizza', price: '$15', icon: 'pizza' },
  { name: 'Sushi Platter', price: '$20', icon: 'fish' },
  { name: 'Chicken Parmesan', price: '$18', icon: 'food' },
  { name: 'Caesar Salad', price: '$10', icon: 'leaf' },
  { name: 'Beef Steak', price: '$25', icon: 'food-steak' },
];

const ViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Popular Dishes in the Restaurant</Text>
      <ScrollView style={styles.scrollView}>
        {dishes.map((dish, index) => (
          <View key={index} style={styles.dishContainer}>
            <Icon name={dish.icon} type="material-community" size={30} color="#444" />
            <Text style={styles.dishText}>{dish.name} - {dish.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  scrollView: {
    width: '100%',
  },
  dishContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dishText: {
    fontSize: 18,
    marginLeft: 10,
  },
});

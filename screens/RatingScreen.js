import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Rating } from 'react-native-elements';

const RatingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>Location: United Kingdom</Text>
      <Text style={styles.reviewTitle}>Reviews:</Text>
      <Text style={styles.review}>1. "Amazing place! The food was delicious and the ambiance was perfect."</Text>
      <Text style={styles.review}>2. "A great place to hang out with friends. Highly recommended!"</Text>
      <Text style={styles.review}>3. "Fantastic service and the desserts were to die for!"</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Overall Rating:</Text>
        <Rating
          type="star"
          imageSize={30}
          readonly
          startingValue={4.5}
          style={styles.rating}
        />
        <Text style={styles.ratingValue}>4.5</Text>
      </View>
    </View>
  );
};

export default RatingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8b400',
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  review: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  rating: {
    marginLeft: 10,
    marginRight: 10,
  },
  ratingValue: {
    fontSize: 18,
    color: '#fff',
  },
});

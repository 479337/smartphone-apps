import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Button, TextInput, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const OrderScreen = () => {
  const [food, setFood] = useState('');
  const [quantity, setQuantity] = useState('');
  const [table, setTable] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const availableDishes = ['Spaghetti Carbonara', 'Margherita Pizza', 'Sushi Platter', 'Chicken Parmesan', 'Caesar Salad', 'Beef Steak'];

  const placeOrder = () => {
    if (!availableDishes.includes(food)) {
      setMessage('Dish not available');
      setModalVisible(true);
      return;
    }
    setMessage(`Your order for ${quantity} ${food}(s) at table ${table} with ${paymentMethod} payment has been placed`);
    setModalVisible(true);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Place Your Order</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter dish name" 
        value={food}
        onChangeText={setFood}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter table number"
        value={table}
        onChangeText={setTable}
        keyboardType="numeric"
      />

      <DropDownPicker
        open={openDropDown}
        value={paymentMethod}
        items={[
          {label: 'PayPal', value: 'paypal'},
          {label: 'Wise', value: 'wise'},
          {label: 'Remity', value: 'remity'}
        ]}
        setOpen={setOpenDropDown}
        setValue={setPaymentMethod}
        setItems={() => {}}
        placeholder="Select payment method"
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
      />

      <Button title="Place Order" onPress={placeOrder} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{message}</Text>
            <TouchableOpacity onPress={toggleModal} style={styles.closeModalButton}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  dropdownContainer: {
    width: '90%',
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
  closeModalButton: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeModalText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OrderScreen;

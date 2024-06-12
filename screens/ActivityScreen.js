import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput, Button } from 'react-native';
import { Icon } from 'react-native-elements';

const ActivityScreen = () => {
  const [game, setGame] = useState('');
  const [slot, setSlot] = useState('');
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const games = [
    { name: 'Chess', icon: 'chess-king' },
    { name: 'Ludo', icon: 'dice' },
    { name: 'Scrabble', icon: 'puzzle-piece' },
    { name: 'Monopoly', icon: 'university' }
  ];

  const bookSlot = () => {
    const foundGame = games.some(g => g.name.toLowerCase() === game.toLowerCase());
    if (!foundGame) {
      setMessage('Game not available');
      setModalVisible(true);
      return;
    }
    setMessage(`Your slot for ${game} has been booked at ${slot}`);
    setModalVisible(true);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Games</Text>
      <Text style={styles.subHeader}>Choose your game and play!</Text>
      {games.map((g, index) => (
        <View key={index} style={styles.gameContainer}>
          <Icon name={g.icon} type="font-awesome-5" size={24} />
          <Text style={styles.gameText}>{g.name}</Text>
        </View>
      ))}
      <TextInput
        style={styles.input}
        placeholder="Enter game name"
        value={game}
        onChangeText={setGame}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter slot time"
        value={slot}
        onChangeText={setSlot}
      />
      <Button title="Book Slot" onPress={bookSlot} />
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
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 20
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 20,
    color: '#666',
    marginBottom: 20,
  },
  gameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  gameText: {
    marginLeft: 10,
    fontSize: 18,
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
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
  closeModalButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  closeModalText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ActivityScreen;

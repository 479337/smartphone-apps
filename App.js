import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Modal, Button, Image } from 'react-native';

export default function App() {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [showSplash, setShowSplash] = useState(true); // State to control the splash screen visibility

    useEffect(() => {
        // Hide the splash screen after 3 seconds
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    

    

    const handleNumberInput = (num) => {
        if (displayValue === '0' || displayValue === '') {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    const handleOperatorInput = (op) => {
        if (!operator && displayValue !== '') {
            setOperator(op);
            setFirstValue(displayValue);
            setDisplayValue('');
        }
    };

    const handleEqual = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);
        let result = 0;
        switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num2 !== 0 ? num1 / num2 : "Error"; break;
            default: return;
        }
        setDisplayValue(result.toString());
        setOperator(null);
        setFirstValue('');
    };

    const handleClear = () => {
        setDisplayValue('0');
        setOperator(null);
        setFirstValue('');
    };
    if (showSplash) {
        return (
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjOr6vNk0xekpjdqYd_y-uang37QiI6T5eJEwh6xFsw&s' }}
                style={styles.fullScreenImage}
            />
        );
    }

  

    return (
        <ImageBackground
            source={{ uri: 'data:image/jpeg;base64,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' }}
            style={styles.container}
        >
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.aboutIcon} onPress={() => setModalVisible(true)}>
                    <Text style={styles.aboutIconText}>?</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitle}>Calculator App Help:</Text>
                            <Text style={styles.modalText}>This app allows you to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. Enter numbers and select operations to calculate results.</Text>
                            <Text style={styles.modalText}>Steps to use the calculator:</Text>
                            <Text style={styles.modalStep}>1. Select a number</Text>
                            <Text style={styles.modalStep}>2. Select an operator</Text>
                            <Text style={styles.modalStep}>3. Select a second number</Text>
                            <Text style={styles.modalStep}>4. Press '=' to see the result</Text>
                            <Button
                                title="Close"
                                onPress={() => setModalVisible(!modalVisible)}
                            />
                        </View>
                    </View>
                </Modal>
                <View style={styles.displayContainer}>
                    <Text style={styles.displayText}>{displayValue}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.row}>
                        <ButtonView num="7" handleInput={handleNumberInput} />
                        <ButtonView num="8" handleInput={handleNumberInput} />
                        <ButtonView num="9" handleInput={handleNumberInput} />
                        <OperatorView op="/" handleInput={handleOperatorInput} />
                    </View>
                    <View style={styles.row}>
                        <ButtonView num="4" handleInput={handleNumberInput} />
                        <ButtonView num="5" handleInput={handleNumberInput} />
                        <ButtonView num="6" handleInput={handleNumberInput} />
                        <OperatorView op="*" handleInput={handleOperatorInput} />
                    </View>
                    <View style={styles.row}>
                        <ButtonView num="1" handleInput={handleNumberInput} />
                        <ButtonView num="2" handleInput={handleNumberInput} />
                        <ButtonView num="3" handleInput={handleNumberInput} />
                        <OperatorView op="-" handleInput={handleOperatorInput} />
                    </View>
                    <View style={styles.row}>
                        <ButtonView num="0" handleInput={handleNumberInput} span={2} />
                        <OperatorView op="+" handleInput={handleOperatorInput} />
                        <TouchableOpacity style={styles.equalButton} onPress={handleEqual}>
                            <Text style={styles.equalButtonText}>=</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
                        <Text style={styles.clearButtonText}>C</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const ButtonView = ({ num, handleInput, span = 1 }) => (
    <TouchableOpacity style={[styles.button, span > 1 ? { flex: span } : null]} onPress={() => handleInput(num)}>
    <Text style={styles.buttonText}>{num}</Text>
</TouchableOpacity>
);

const OperatorView = ({ op, handleInput }) => (
<TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleInput(op)}>
    <Text style={[styles.buttonText, styles.operatorButtonText]}>{op}</Text>
</TouchableOpacity>
);

const styles = StyleSheet.create({
  fullScreenImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
},
container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
},
overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
},
displayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingLeft: 20,
},
displayText: {
    fontSize: 48,
    color: '#333',
    fontWeight: 'bold',
},
buttonContainer: {
    flex: 2,
    padding: 20,
},
row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
},
button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7e7e7',
    minHeight: 80,
    marginHorizontal: 10,
    borderRadius: 50,
    elevation: 3,
},
buttonText: {
    fontSize: 24,
    color: '#333',
},
operatorButton: {
    backgroundColor: '#dcdcdc',
},
operatorButtonText: {
    color: '#ff9500',
    fontWeight: 'bold',
},
equalButton: {
  flex: 2, // Increase the flex value to make it wider
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ff9500',
  elevation: 2,
},
equalButtonText: {
    fontSize: 32,
    color: '#fff',
},
clearButton: {
    backgroundColor: '#f2f2f2',
    elevation: 3,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 80,
    marginTop: 10,
},
clearButtonText: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
},
aboutIcon: {
    position: 'absolute',
    top: 30,
    right: 30,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 10,
},
aboutIconText: {
    fontSize: 24,
    color: '#007BFF',
},
centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
},
modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
},
modalTitle: {
  fontWeight: 'bold',
  fontSize: 20,
  marginBottom: 10,
},
modalText: {
  fontSize: 16,
  textAlign: 'center',
  marginBottom: 5,
},
modalStep: {
  fontSize: 16,
  textAlign: 'left',
  marginLeft: 10,
  marginBottom: 5,
},
});



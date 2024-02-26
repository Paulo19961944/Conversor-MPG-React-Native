import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultado, setResultado] = useState('');

  const handleCustomButtonPress = () => {
    // Captura o valor de MPG
    let mpg = parseFloat(inputValue);
    // Calcular o resultado final
    const resultadoFinal = mpg * 0.423;
    setResultado(resultadoFinal);
    // Mostrar o resultado em um alerta
    Alert.alert(
      `O valor de ${inputValue} MPG em Km/l é:`,
      `${resultadoFinal} Km/l`,
      [{ text: 'OK', onPress: resetValues }],
      { cancelable: false }
    );
  };

  const resetValues = () => {
    setInputValue('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Conversor de MPG em KM/L</Text>
        <Text>Digite o valor em MPG:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite a medida em MPG"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity style={styles.customButton} onPress={handleCustomButtonPress}>
          <Text style={styles.customButtonText}>Converter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: '#F0F0F0',
    padding: 20,
    borderRadius: 10,
    width: 320,
    height: 400,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 60,
  },
  customButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  customButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;

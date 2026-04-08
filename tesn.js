import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Passo 3: Alterando o componente Text */}
      <Text style={styles.text}>
        Olá, Desenvolvedor! Estou aprendendo React Native!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Note: Corrigi um pequeno erro de digitação de 'justifyCentent' para 'justifyContent'
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 20,
  }
});
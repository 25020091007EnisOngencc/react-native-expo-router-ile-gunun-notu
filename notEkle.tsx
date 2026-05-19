import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function NotEkleScreen() {
  const router = useRouter();
  const [inputText, setInputText] = useState('');

  const kaydetVeGeriDon = () => {
    router.replace({
      pathname: '/',
      params: { yeniNot: inputText }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Not Yaz</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Notunuzu buraya yazın..."
        placeholderTextColor="#666"
        value={inputText}
        onChangeText={setInputText}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={kaydetVeGeriDon}>
        <Text style={styles.buttonText}>Notu Güncelle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: '#FFF',
    borderRadius: 10,
    padding: 20,
    fontSize: 18,
    minHeight: 120,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CC9F0',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
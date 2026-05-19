import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  
  // İkinci ekrandan (notEkle) gelen parametreleri burada yakalıyoruz (Android'deki getIntent().getStringExtra() mantığı)
  const params = useLocalSearchParams();
  
  // Eğer gelen bir not varsa onu göster, yoksa varsayılan olarak "dbdf" yaz
  const gununNotu = params.yeniNot ? params.yeniNot : "iletişim ve"; 

  return (
    <View style={styles.container}>
      {/* Üst Başlık */}
      <Text style={styles.headerText}>✨ GÜNÜN NOTU</Text>
      
      {/* Not Gösterim Alanı */}
      <View style={styles.noteCard}>
        <Text style={styles.noteText}>{gununNotu}</Text>
      </View>

      {/* Yeni Not Yaz Butonu */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/notEkle')}
      >
        <Text style={styles.buttonText}>Yeni Not Yaz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    letterSpacing: 2,
    marginTop: 20,
  },
  noteCard: {
    backgroundColor: '#1E1E1E',
    width: '100%',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
  },
  noteText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CC9F0',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1A1A1A',
    width: '90%',
    padding: 18,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
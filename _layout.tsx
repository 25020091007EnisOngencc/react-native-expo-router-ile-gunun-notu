import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Ana sayfamız */}
      <Stack.Screen name="index" />
      {/* İkinci sayfamız */}
      <Stack.Screen name="notEkle" />
    </Stack>
  );
}
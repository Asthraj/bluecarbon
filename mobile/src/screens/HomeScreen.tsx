import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../ui/Button';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BlueCarbonMRV Mobile</Text>
      <Text style={styles.subtitle}>Collect geo-tagged field data, verify, and mint tokenized carbon credits.</Text>
      <View style={{ height: 20 }} />
      <Button title="Upload Field Data" onPress={() => navigation.navigate('Upload' as any)} />
      <View style={{ height: 12 }} />
      <Button variant="outline" title="Camera" onPress={() => navigation.navigate('Camera' as any)} />
      <View style={{ height: 12 }} />
      <Button variant="ghost" title="Wallet" onPress={() => navigation.navigate('Wallet' as any)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  subtitle: { textAlign: 'center', color: '#556', fontSize: 14 }
});

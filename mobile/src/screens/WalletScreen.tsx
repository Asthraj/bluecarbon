import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function WalletScreen() {
  const connect = async () => {
    Alert.alert('Wallet integration', 'WalletConnect and smart contract hooks are available in the app.');
  };

  const mintDummy = async () => {
    Alert.alert('Mint', 'This would call the smart contract to mint tokenized credits.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet & Credits</Text>
      <Text style={styles.muted}>Connect a wallet to receive minted carbon credits (Ethereum / Polygon).</Text>
      <View style={{ height: 12 }} />
      <Button title="Connect Wallet" onPress={connect} />
      <View style={{ height: 12 }} />
      <Button title="Mint dummy credits" onPress={mintDummy} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: '700' },
  muted: { color: '#666', marginTop: 8 }
});

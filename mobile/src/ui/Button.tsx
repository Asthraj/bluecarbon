import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress, variant = 'default' }: { title: string; onPress?: () => void; variant?: 'default' | 'outline' | 'ghost' }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, variant === 'outline' && styles.outline, variant === 'ghost' && styles.ghost]}>
      <Text style={[styles.txt, variant === 'ghost' && styles.ghostText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: { backgroundColor: '#0ea5a4', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 },
  txt: { color: '#fff', fontWeight: '700' },
  outline: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#0ea5a4' },
  ghost: { backgroundColor: 'transparent' },
  ghostText: { color: '#0ea5a4' }
});

import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (!cameraRef.current) return;
    const result = await cameraRef.current.takePictureAsync({ quality: 0.7 });
    setPhotoUri(result.uri);
    const dest = FileSystem.documentDirectory + result.uri.split('/').pop();
    await FileSystem.copyAsync({ from: result.uri, to: dest });
  };

  if (hasPermission === null) return <View style={styles.center}><Text>Requesting camera permission...</Text></View>;
  if (hasPermission === false) return <View style={styles.center}><Text>No access to camera</Text></View>;

  return (
    <View style={styles.container}>
      {!photoUri ? (
        <Camera style={styles.preview} ref={(c) => (cameraRef.current = c)} />
      ) : (
        <Image source={{ uri: photoUri }} style={styles.preview} />
      )}
      <View style={styles.controls}>
        <TouchableOpacity onPress={takePhoto} style={styles.btn}><Text style={styles.btnText}>Capture</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setPhotoUri(null)} style={[styles.btn, styles.secondary]}><Text>Reset</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  preview: { flex: 1 },
  controls: { padding: 12, flexDirection: 'row', justifyContent: 'center', gap: 12 },
  btn: { backgroundColor: '#0ea5a4', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 },
  btnText: { color: '#fff', fontWeight: '700' },
  secondary: { backgroundColor: '#eee' }
});

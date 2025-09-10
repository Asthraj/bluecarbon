import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";

type QueueItem = {
  id: string;
  uri: string;
  lat?: number;
  lon?: number;
  notes?: string;
};

export default function UploadScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [notes, setNotes] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [queue, setQueue] = useState<QueueItem[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const loc = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
        });
        setLocation(loc);
      }
      const raw = await AsyncStorage.getItem("@upload_queue");
      if (raw) setQueue(JSON.parse(raw));
    })();
  }, []);

  const addSample = async () => {
    const sampleUri = FileSystem.documentDirectory + "sample.jpg";
    await FileSystem.writeAsStringAsync(sampleUri, "SAMPLE", {
      encoding: FileSystem.EncodingType.UTF8,
    });
    const item: QueueItem = {
      id: Date.now().toString(),
      uri: sampleUri,
      lat: location?.coords.latitude,
      lon: location?.coords.longitude,
      notes,
    };
    const next = [item, ...queue];
    setQueue(next);
    await AsyncStorage.setItem("@upload_queue", JSON.stringify(next));
  };

  const uploadItem = async (item: QueueItem) => {
    try {
      const fileInfo = await FileSystem.getInfoAsync(item.uri);
      const form = new FormData();
      form.append("file", {
        uri: item.uri,
        name: item.id + ".jpg",
        type: "image/jpeg",
      } as any);
      form.append("lat", String(item.lat ?? ""));
      form.append("lon", String(item.lon ?? ""));
      form.append("notes", item.notes ?? "");

      await fetch("https://example.com/api/upload", {
        method: "POST",
        body: form as any,
      });
      const next = queue.filter((q) => q.id !== item.id);
      setQueue(next);
      await AsyncStorage.setItem("@upload_queue", JSON.stringify(next));
    } catch (e) {
      console.error("Upload failed", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Field Data</Text>
      <Text style={styles.muted}>
        Latitude: {location?.coords.latitude?.toFixed(4) ?? "—"} Longitude:{" "}
        {location?.coords.longitude?.toFixed(4) ?? "—"}
      </Text>
      <TextInput
        placeholder="Notes"
        style={styles.input}
        value={notes}
        onChangeText={setNotes}
      />
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Button title="Capture (Camera)" onPress={() => {}} />
        <Button title="Attach sample" onPress={addSample} />
      </View>

      <Text style={{ marginTop: 16, fontWeight: "700" }}>Upload Queue</Text>
      <FlatList
        data={queue}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item.id)}
            style={styles.queueItem}
          >
            <View>
              <Text style={{ fontWeight: "600" }}>{item.id}</Text>
              <Text style={{ color: "#666" }}>{item.notes}</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Button title="Upload" onPress={() => uploadItem(item)} />
            </View>
          </TouchableOpacity>
        )}
      />

      {selected && <Text style={{ marginTop: 12 }}>Selected: {selected}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "700" },
  muted: { color: "#666", marginTop: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginTop: 12,
  },
  queueItem: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

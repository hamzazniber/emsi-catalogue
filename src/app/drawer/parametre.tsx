import { StyleSheet, Text, View } from 'react-native';

export default function Settings() {
  return <View style={styles.container}><Text style={styles.title}>Paramètres</Text><Text>Configuration de l’application</Text></View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
  title: { fontSize: 28, fontWeight: '700' },
});

import { StyleSheet, Text, View } from 'react-native';

export default function About() {
  return <View style={styles.container}><Text style={styles.title}>À propos</Text><Text>EMSI Catalogue</Text></View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
  title: { fontSize: 28, fontWeight: '700' },
});

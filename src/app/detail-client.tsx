import { router, useLocalSearchParams } from 'expo-router';
import { Button, Text, View } from "react-native";
import { clients } from '../data/clients';


export default function DetailClient() {
const { id } = useLocalSearchParams();
const c = clients.find(x => String(x.id) === String(id));
return <View style={{ padding:20 }}>
<Text>{c?.nom ?? 'Client introuvable'}</Text>
<Text>Ville : {c?.ville ?? '-'}</Text>
<Text>Tél. : {c?.telephone ?? '-'}</Text>
<Button title="Retour" onPress={() => router.back()} />
</View>;
}
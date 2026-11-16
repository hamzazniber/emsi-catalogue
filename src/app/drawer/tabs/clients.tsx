import { router } from 'expo-router';
import { Pressable, ScrollView, Text } from 'react-native';
import { clients } from '../../../data/clients';


export default function Clients() {
  return (
<ScrollView>

      <Text >
       Client
      </Text>

    {clients.map(a => (
<Pressable key={a.id}
onPress={() => router.push({
pathname: "/detail-client", params: { id : a.id }
})}
>
<Text style={{ fontWeight: "bold" }}>{a.nom}</Text>
<Text>{a.ville} — {a.telephone}</Text>
</Pressable>
))}


    </ScrollView>
  );
}

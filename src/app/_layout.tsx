import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="drawer" options={{ headerShown: false }} />

      <Stack.Screen name="details" options={{ title: "Détails article" }} />

      <Stack.Screen name="detail-client" options={{ title: "Détail client" }} />
    </Stack>
  );
}

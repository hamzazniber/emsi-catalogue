import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Articles" }}
      />

      <Tabs.Screen
        name="clients"
        options={{ title: "Clients" }}
      />

    </Tabs>
  );
}
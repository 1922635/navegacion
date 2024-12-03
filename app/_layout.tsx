import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen
        name='index'
        options={{title: 'Inicio'}}/>
        <Stack.Screen
        name='peliculas/index'
        options={{title: 'Peliculas'}}/>
        <Stack.Screen
        name='settings/index'
        options={{title: 'Settings'}}/>
    </Stack>
  );
}

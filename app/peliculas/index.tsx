import { FlatList, Text, View } from "react-native";
import { peliculas } from "@/data/peliculas.data";
import { Link } from "expo-router";

export default function Index() {
  return (
    <FlatList data={peliculas}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
            return (
                <View>
                    <Link href={`./peliculas/${item.id}`}>{item.title}</Link>
                </View>
            );
        }}>

    </FlatList>
  );
}

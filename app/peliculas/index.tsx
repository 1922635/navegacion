import { FlatList, Text, View } from "react-native";
import { peliculas } from "@/data/peliculas.data"

export default function Index() {
  return (
    <FlatList data={peliculas}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
            return (
                <View>
                    <Text>{item.title}</Text>
                </View>
            );
        }}>

    </FlatList>
  );
}

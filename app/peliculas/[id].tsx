import { Image, View, Text } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { peliculas } from '@/data/peliculas.data'

const DetallePelicula = () => {

    const {id} = useLocalSearchParams();

    const pelicula = peliculas.find((peli) =>  peli.id == id)

    if (!pelicula) {
        return <Redirect href='/'></Redirect>
    }

  return (
    <View>
        <Image style={{width:80, height:130}} source={{uri: pelicula.poster}}></Image>
      <Text>{pelicula.title}</Text>
      <Text>{pelicula.description}</Text>
    </View>
  )
}

export default DetallePelicula
import React from 'react';
import { View, Text, Image } from 'react-native';
import ImgRestaurante1 from '../../assets/restaurante01.png';
import ImgRestaurante2 from '../../assets/restaurante02.png';
import ImgRestaurante3 from '../../assets/restaurante03.png';

export default function TelaRestaurantes() {
 return (
  <View>
    <Text>Bares e Restaurantes</Text>
    <Text>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a
    cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. 
    Confira alguns bares e restaurantes famosos.</Text>

    <View>
      <Image source={ImgRestaurante1}/>
      <Text>Armazém Mar</Text>
      <Text>Localização: Rod Rio-Santos</Text>
    </View>

    <View>
      <Image source={ImgRestaurante2}/>
      <Text>Bendita's Restaurante</Text>
      <Text>Localização: Centro Histórico</Text>
    </View>

    <View>
      <Image source={ImgRestaurante3}/>
      <Text>Seria do mar pizza-bar</Text>
      <Text>Localização: Praia do Jabaquara</Text>
    </View>


  </View>
  );
}
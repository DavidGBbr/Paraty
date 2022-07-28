import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import ImgRestaurante1 from '../../assets/restaurante01.png';
import ImgRestaurante2 from '../../assets/restaurante02.png';
import ImgRestaurante3 from '../../assets/restaurante03.png';

export default function TelaRestaurantes() {
 return (
  <View style={styles.container}>
    <Text style={styles.title}>Bares e Restaurantes</Text>
    <Text style={styles.description}>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a
    cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. 
    Confira alguns bares e restaurantes famosos.</Text>

    <View style={styles.card}>
      <Image source={ImgRestaurante1} style={styles.img}/>
      <Text style={styles.cardTitle}>Armazém Mar</Text>
      <Text>Localização: Rod Rio-Santos</Text>
    </View>

    <View style={styles.card}>
      <Image source={ImgRestaurante2} style={styles.img}/>
      <Text style={styles.cardTitle}>Bendita's Restaurante</Text>
      <Text>Localização: Centro Histórico</Text>
    </View>

    <View style={styles.card}>
      <Image source={ImgRestaurante3} style={styles.img}/>
      <Text style={styles.cardTitle}>Seria do mar pizza-bar</Text>
      <Text>Localização: Praia do Jabaquara</Text>
    </View>


  </View>
  );
}
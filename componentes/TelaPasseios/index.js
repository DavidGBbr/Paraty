import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import imgPasseio1 from '../../assets/passeio01.png';
import imgPasseio2 from '../../assets/passeio02.png';
import imgPasseio3 from '../../assets/passeio03.png';

export default function TelaPasseios() {
 return (
   <View style={styles.container}>

    <Text style={styles.title}>Passeios em Paraty</Text>
    <Text style={styles.description}>O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as 
    opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. 
    Veja dois exemplos:</Text>

    <View style={styles.card}>
      <Text cardTitle>Tirolesa</Text>
      <Image source={imgPasseio1} style={styles.img}/>
    </View>

    <View style={styles.card}>
      <Text cardTitle>Rafting</Text>
      <Image source={imgPasseio2} style={styles.img}/>
    </View>

    <View style={styles.card}>
      <Text cardTitle>Conoagem no mangue</Text>
      <Image source={imgPasseio3} style={styles.img}/>
    </View>

   </View>
  );
}
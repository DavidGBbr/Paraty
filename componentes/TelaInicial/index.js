import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from './styles';
import Capa from '../../assets/01.png'

export default function TelaInicial(props) {
 return (
   <View style={styles.container}>

    <View style={styles.card}>

      <Text style={styles.title}>Paraty</Text>
      <Text style={styles.description}>Saiba o que visitar em paraty</Text>
      <Image source={Capa} style={styles.img}/>

      <View style={styles.boxButton}>
        <Button style={styles.button} 
        title="Ver Restaurantes" 
        onPress={()=>{props.navigation.navigate('Tela Restaurantes')}}
        color="#372d00"/>
      </View>

      <View style={styles.boxButton}>
        <Button style={styles.button} 
        title="Ver Passeios" 
        onPress={()=>{props.navigation.navigate('Tela Passeios')}}
        color="#372d00"/>
      </View>

      <View style={styles.boxButton}>
        <Button 
        style={styles.button} 
        title="Ver Hospedagem" 
        onPress={()=>{props.navigation.navigate('Tela Hospedagem')}}
        color="#372d00"/>
      </View>

    </View>

   </View>
  );
}
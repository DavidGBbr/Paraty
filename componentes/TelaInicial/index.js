import React from 'react';
import { View, Text, Image, Button } from 'react-native';

import Capa from '../../assets/01.png'

export default function TelaInicial(props) {
 return (
   <View>

    <View>
      <Text>Paraty</Text>
      <Text>Saiba o que visitar em paraty</Text>
      <Image source={Capa}/>

      <View>
        <Button title="Ver Restaurantes" onPress={()=>{props.navigation.navigate('Tela Restaurantes')}}/>
      </View>

      <View>
        <Button title="Ver Passeios" onPress={()=>{props.navigation.navigate('Tela Passeios')}}/>
      </View>
      
      <View>
        <Button title="Ver Hospedagem" onPress={()=>{props.navigation.navigate('Tela Hospedagem')}}/>
      </View>

    </View>

   </View>
  );
}
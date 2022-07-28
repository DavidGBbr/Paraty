import React from 'react';
import { View, Text, Image } from 'react-native';
import imgPasseio1 from '../../assets/passeio01.png';
import imgPasseio2 from '../../assets/passeio02.png';
import imgPasseio3 from '../../assets/passeio03.png';

export default function TelaPasseios() {
 return (
   <View>

    <Text>Passeios em Paraty</Text>
    <Text>O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as 
    opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. 
    Veja dois exemplos:</Text>

    <View>
      <Text>Tirolesa</Text>
      <Image source={imgPasseio1}/>
    </View>

    <View>
      <Text>Rafting</Text>
      <Image source={imgPasseio2}/>
    </View>

    <View>
      <Text>Conoagem no mangue</Text>
      <Image source={imgPasseio3}/>
    </View>
   </View>
  );
}
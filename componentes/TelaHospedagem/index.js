import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import imgHospedagem1 from '../../assets/hospedagem01.png';
import imgHospedagem2 from '../../assets/hospedagem02.png';
import imgHospedagem3 from '../../assets/hospedagem03.png';

export default function TelaHospedagem() {
 return (
  <View style={styles.container}>

  <Text style={styles.title}>Pousadas e Hotéis em Paraty</Text>
  <Text style={styles.description}>Paraty conta com excelentes hoteis
  e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>

  <View style={styles.card}>
    <Image source={imgHospedagem1} style={styles.img}/>
    <Text style={styles.cardTitle}>Pousada Missanga</Text>
    <Text>Valor médio: R$ 350,00</Text>
    <Text>Localização: Próx. à Av. Roberto Silveira</Text>
  </View>

  <View style={styles.card}>
    <Image source={imgHospedagem2} style={styles.img}/>
    <Text style={styles.cardTitle}>Pousada Morro do Forte</Text>
    <Text>Valor médio: R$ 450,00</Text>
    <Text>Localização: Próximo à Praia - Pontal</Text>
  </View>

  <View style={styles.card}>
    <Image source={imgHospedagem3} style={styles.img}/>
    <Text style={styles.cardTitle}>Pousada Porto Imperial</Text>
    <Text>Valor médio: R$ 550,00</Text>
    <Text>Localização: Centro Histórico</Text>
  </View>

 </View>
  );
}
import React from 'react';
import { View, Text } from 'react-native';

export default function Dashboard() {
  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:24, color:'#2D9CDB'}}>Dashboard</Text>
      <Text style={{marginTop:10}}>Você está 80% do caminho para a sua meta 🚀</Text>
    </View>
  );
}
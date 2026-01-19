import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:24}}>Login</Text>
      <TextInput placeholder="Email" style={{borderWidth:1, marginVertical:10}} />
      <TextInput placeholder="Senha" secureTextEntry style={{borderWidth:1, marginVertical:10}} />
      <Button title="Entrar" onPress={() => navigation.navigate("Dashboard")} />
    </View>
  );
}
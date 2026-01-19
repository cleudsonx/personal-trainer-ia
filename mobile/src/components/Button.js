import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor:'#2D9CDB', padding:10, borderRadius:5}}>
      <Text style={{color:'#fff', textAlign:'center'}}>{title}</Text>
    </TouchableOpacity>
  );
}
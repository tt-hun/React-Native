// 컴포넌트

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  
  const [cnt, setCnt] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.assa}>재밌는 숫자 놀이!</Text>
      <Text style={styles.cnt}>{cnt}</Text>
      <Button title="더하기" onPress={ () => setCnt(cnt+1)}></Button>
      <Button title="빼기" onPress={ () => setCnt(cnt-1)}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  assa:{
    color:'#f00',
    fontSize:20,

  },
  cnt:{
    fontSize:50,
    marginTop:20,
  }
});

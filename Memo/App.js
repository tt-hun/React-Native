import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';

// 메모 데이터 저장하기
import { AsyncStorage } from '@react-native-async-storage/async-storage';

export default function App() {
  
  const [txt, setTxt] = useState('안녕');

  // 데이터 저장하기
  const saveData = async (value) => {
    try{
      await AsyncStorage.setItem('assa', value)
      console.log('저장');
    } catch (e) {
      // saving error
    }
  }

  // 데이터 불러오기
  const loadData = async () => {
    try{
      const value = await AsyncStorage.getItem('assa')
      if(value !== null){
        // value previously stored
        setTxt(value);
      }

    } catch (e) {
      // error reading value
    }
  }


  return (
    <View style={{flex:1, backgroundColor:'#fc0',}}>
      <SafeAreaView style={{flex:1,}}>
        <StatusBar style="auto" />

          <View style={{padding:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between',}}>
            <Button title="저장" onPress={()=>saveData(txt)}></Button>
            <Text style={{ fontSize:18,}}>메모장</Text>
            <Button title="불러오기" onPress={() => loadData()}></Button>
          </View> 

          <View style={{backgroundColor:'#eeeeee', flex:1, padding:10, }}>
            <TextInput value={txt} onChangeText={ txt => setTxt(txt) }
            multiline 
            />
          </View>
      </SafeAreaView>
    </View>   


  );
}
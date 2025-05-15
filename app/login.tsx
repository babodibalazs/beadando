import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

import Header from './components/Header';

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const login = async () => {
    const user = await AsyncStorage.getItem(userName);

    try {
      if (user != null){
        setUserName('')
        setPassword('')
        setError('')
        await AsyncStorage.setItem('token', userName)
        router.navigate('/')
      } else {
        setError("Rossz adatok")
      }
    } catch (e) {
      console.error(e)
    }
  }
  
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Header />
        <View style={styles.main}>
          <View>
            <Text>Username: </Text>
            <TextInput style={styles.input} value={userName} onChangeText={(t) => setUserName(t)} />
          </View>
          <View>
            <Text>Password: </Text>
            <TextInput style={styles.input} value={password} onChangeText={(t) => setPassword(t)} />
          </View>
          <View style={styles.buttons}>
            <Button onPress={login} title='Login' />
          </View>
          <Text>{error}</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  input: {
    height: 30,
    width: 120, 
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  buttons: {
    flexDirection: 'row',
  },
})
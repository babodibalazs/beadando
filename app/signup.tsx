import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, StyleSheet, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useRouter } from 'expo-router';

import Header from './components/Header';

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  function signup () {
    const user = localStorage.getItem(userName)

    if (user === null){
      localStorage.setItem(userName, password)
      localStorage.setItem('token', userName)
      setError('')
    } else {
      setError("Ez a felhasználó már létezik")
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
            <Button onPress={() => signup()} title='Signup' />
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
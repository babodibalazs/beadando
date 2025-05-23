import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";


export default function Signup() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()
  
  const signup = async () => {
    const userCheck = await AsyncStorage.getItem(userName);

    try {
      if (userCheck === null && userName != '' && password != ''){
        setUserName('')
        setPassword('')
        setError('')
        await AsyncStorage.setItem(userName, password)
        await AsyncStorage.setItem('token', userName)
        router.navigate('/')
      } else {
        setError("Ez a felhasználó már létezik")
      }
    } catch (err) {
      console.error(err)
      setError(String(err))
    }
  }

  return (
    <SafeAreaView>
        <KeyboardAvoidingView>
          <View style={styles.main}>
            <TextInput style={styles.input} value={userName} placeholder='Username' onChangeText={(t) => setUserName(t)} />
            <TextInput style={styles.input} value={password} placeholder='Password' onChangeText={(t) => setPassword(t)} />
            <Pressable style={styles.button} onPress={signup}>
              <Text style={styles.button_text}>Signup</Text>
            </Pressable>  
            <Text style={styles.error}>{error}</Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
}
  
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    width: '100%',
    marginTop: 5,
  },
  input: {
    width: 200,
    height: 30,
    padding: 5,
    marginBottom: 5,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 6,
  },
  button: {
    width: 80,
    height: 40,
    padding: 8,
    marginBottom: 5,
    alignItems: "center",
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 18,
  },
  button_text: {
    fontWeight: "bold",
  },
  error: {
    color: "#f00",
    alignItems: "center",
  },
})
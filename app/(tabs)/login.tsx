import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

import { auth } from '../../config/firebase';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const login = async () => {
    const user = await auth.signInWithEmailAndPassword(email, password).catch(function(err) {
      if (err.code === 'auth/wrong-password') {
        alert("Wrong password") 
      } else {
        alert(err)
      }
    })

    alert(user)
  }
  
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View style={styles.main}>
          <TextInput style={styles.input} value={email} placeholder="Email" onChangeText={(t) => setEmail(t)} />
          <TextInput style={styles.input} value={password} placeholder="Password" onChangeText={(t) => setPassword(t)} />
          <Pressable style={styles.button} onPress={login}>
            <Text style={styles.button_text}>Login</Text>
          </Pressable>
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
})
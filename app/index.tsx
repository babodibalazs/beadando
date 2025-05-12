import React from 'react';
import { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet, KeyboardAvoidingView, SafeAreaView } from "react-native";

export default function Index() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedin] = useState(false)
    const [error, setError] = useState('')
  
    function signup () {
        const user = localStorage.getItem(userName)

        if (user === null){
          localStorage.setItem(userName, password)
          setError('')
          setLoggedin(true)
        } else {
          setError("Ez a felhasználó már létezik")
        }
    }

    function login () {
      const user = localStorage.getItem(userName)

      if (user != null){
        setUserName('')
        setPassword('')
        setError('')
        localStorage.setItem('token', userName)
        setLoggedin(true)
       } else {
         setError("Rossz adatok")
       }
    }
  
    function logout () {
      if (loggedIn){
        setUserName('')
        setPassword('')
        setError('')
        localStorage.removeItem('token')
        setLoggedin(false)
      }
    }
  
    return (
      <SafeAreaView>
        <KeyboardAvoidingView>
          <View style={styles.login}>
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
              <Button onPress={() => login()} title='Login' />
              <Button onPress={() => logout()} title='Logout' />
              <Button onPress={() => {localStorage.clear()}} title='Clear' />
            </View>
            <Text>{localStorage.getItem('token')}</Text>
            <Text>{error}</Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
}
  
const styles = StyleSheet.create({
  login: {
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
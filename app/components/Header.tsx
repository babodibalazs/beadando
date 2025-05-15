import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Header () {
  const [token, setToken] = useState('')

  const router = useRouter()

  const logout = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        await AsyncStorage.removeItem('token')
      }
    } catch (e) {
      console.error(e)
    }
  }

  const update = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value != null) {
        setToken(value)
      } else {
        setToken('')
      }
    } catch (e) {
      console.error(e)
    }
  }
 
  useEffect (() => {
    update
  }, [token])

  return(
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View style={styles.header}>
          <Link style={styles.header_text} href={'/'}> Random Forum </Link>
          {(token === '') ? ( 
            <View style={styles.button_block}>
              <Link style={styles.header_button} href={'/login'}> Login </Link>
              <Link style={styles.header_button} href={'/signup'}> Signup </Link>
            </View>
          ) : (
            <View style={styles.button_block}>
              <Text style={styles.header_button}> {token} </Text>
              <Text style={styles.header_button} onPress={logout}> Logout </Text>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderTopWidth: 1,
    borderTopColor: 'black',
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_text: {
    height: 60,
    paddingLeft: 10,
    backgroundColor: 'white',
    color: 'black',
    textDecorationLine: 'none',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  button_block: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  header_button: {
    height: 60,
    width: 80,
    backgroundColor: 'white',
    color: 'black',
    textDecorationLine: 'none',
    borderStyle: 'solid',
    borderLeftWidth: 1,
    borderLeftColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }
})
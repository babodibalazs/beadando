import { useState, useEffect, use } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Link, useRouter } from 'expo-router';

export default function Header () {
  const router = useRouter()

  function logout () {
    if (localStorage.getItem("token") != null){
      localStorage.removeItem('token')
      router.navigate('/')
    }
  }

  return(
    <SafeAreaView>
      <View style={styles.header}>
        <Link style={styles.header_text} href={'/'}> Random Forum </Link>
        {localStorage.getItem("token") === null ? ( 
          <View style={styles.button_block}>
            <Link style={styles.header_button} href={'/login'}> Login </Link>
            <Link style={styles.header_button} href={'/signup'}> Signup </Link>
          </View>
        ) : (
          <View style={styles.button_block}>
            <Text style={styles.header_button}> {localStorage.getItem("token")} </Text>
            <Text style={styles.header_button} onPress={() => logout()}> Logout </Text>
          </View>
        )}
      </View>
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function Postbox({ setPosts })  {
  const [text, setText] = useState('')

  const submit = async () => {
    try {
      const loadPosts = await AsyncStorage.getItem('posts')

      if (loadPosts === null) {
        await AsyncStorage.setItem('posts', '{}')
      } else {
        const posts:JSON = JSON.parse(loadPosts)

        var user = await AsyncStorage.getItem('token')
        const id = Object.keys(posts).length
        const newpost = {
          userName: user,
          post: text,
        }

        posts[id] = newpost

        await AsyncStorage.setItem('posts', JSON.stringify(posts))
        setPosts(posts)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const clear = async () => {
    try {
      await AsyncStorage.removeItem('posts')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <View style={styles.main}>
      <TextInput multiline numberOfLines={5} style={styles.input} value={text} onChangeText={(t) => setText(t)}/>
      <View style={styles.buttons}>
        <Button onPress={submit} title='Submit' />
        <Button onPress={clear} title='Clear' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: '80%',
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
    padding: 5,
  },
})
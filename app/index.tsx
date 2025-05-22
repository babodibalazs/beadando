import Constants from "expo-constants";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import Header from './components/Header';
import Postbox from "./components/Postbox";
import Posts from "./components/Posts";

export default function Index() {
  const [posts, setPosts] = useState({})

  useEffect(() => {
    setPosts(Constants.manifest)
  }, [posts])

  return(
    <SafeAreaView>
      <KeyboardAvoidingView>
        <ScrollView>
          <Header />
          <View style={styles.main}>
            <Postbox setPosts={setPosts} />
            <Posts posts={posts} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
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
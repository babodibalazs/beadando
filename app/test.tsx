import { Text, View, Button, TextInput, StyleSheet, KeyboardAvoidingView, SafeAreaView } from "react-native";

import Header from './components/Header';

export default function Test() {

  return(
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Header />
        <View style={styles.main}>
          <Text>Hello</Text>
        </View>
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
})
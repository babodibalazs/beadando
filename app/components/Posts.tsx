import { Text, View } from "react-native";

export default function Posts ({ posts }) {

  return (
    <View>
      <Text>Posts:</Text>
      <Text>{JSON.stringify(posts)}</Text>
    </View>
  )
}
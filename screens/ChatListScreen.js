import { View, Text, StyleSheet, Button } from 'react-native';

const ChatListScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Chat list screen</Text>

      <Button title="Go to settings" onPress={() => navigation.navigate("ChatSettings")} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default ChatListScreen;
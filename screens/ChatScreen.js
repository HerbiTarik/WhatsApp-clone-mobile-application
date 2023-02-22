import { View, Text, StyleSheet, Button } from 'react-native';

const ChatScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Chat screen</Text>
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
export default ChatScreen;
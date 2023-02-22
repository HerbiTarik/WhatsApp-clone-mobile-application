import { View, Text, StyleSheet } from 'react-native';

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Auth screen</Text>
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
export default AuthScreen;
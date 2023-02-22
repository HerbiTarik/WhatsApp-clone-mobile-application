import { View, Text, StyleSheet, Button, ImageBackground, TextInput} from 'react-native';
import backgroundImage from "../assets/images/droplet.jpeg";
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = ({navigation}) => {
  return (
   <SafeAreaView edges={['right','left','buttom']} style={styles.container}>
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    </ImageBackground>

    <View style={styles.inputContainer}>
        <Button title='Image' />

        <TextInput />

        <Button title="Camera" />
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column'
    },
    backgroundImage: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 10,
        height: 50
    }
})
export default ChatScreen;
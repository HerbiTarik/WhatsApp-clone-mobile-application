import { View, Text, StyleSheet, Button, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import backgroundImage from "../assets/images/droplet.jpeg";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import colors from '../constants/colors';
import { useState } from 'react';

const ChatScreen = ({navigation}) => {

    const  [messageText, setMessageText] = useState("");

    console.log(messageText);
  return (
   <SafeAreaView edges={['right','left','buttom']} style={styles.container}>
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    </ImageBackground>

    <View style={styles.inputContainer}>

        <TouchableOpacity 
            style={styles.mediaButton}
            onPress={() => console.log("pressed!")}>
            <Feather name="plus" size={24} color={colors.blue} />
        </TouchableOpacity>

        <TextInput style={styles.textbox} value={messageText} onChangeText={(e) => setMessageText(e)} />

        {messageText === "" &&
        <TouchableOpacity 
            style={styles.mediaButton}
            onPress={() => console.log("pressed!")}>
            <Feather name="camera" size={24} color={colors.blue} />
        </TouchableOpacity>
        }
        {messageText !== "" &&
        <TouchableOpacity 
            style={{...styles.mediaButton, ...styles.sendButton}}
            onPress={() => console.log("pressed!")}>
            <Feather name="send" size={20} color={"white"} />
        </TouchableOpacity>
        } 
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
        height: 50,
        // alignItems: "center",
    },
    textbox: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: colors.lightGray,
        marginHorizontal: 15,
        paddingHorizontal: 12,
    },
    mediaButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
    },
    sendButton: {
        backgroundColor: colors.blue,
        borderRadius: 50,
        padding: 8,
    },
   
})
export default ChatScreen;
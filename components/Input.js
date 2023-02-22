import { View, Text, StyleSheet, TextInput } from 'react-native'
import colors from '../constants/colors'
import { FontAwesome } from '@expo/vector-icons';

const Input = props => {
  return (
    <View style={styles.container}>
        <Text>{props.label}</Text>

        <View style={styles.inputContainer}>
        {props.icon && 
            <props.iconPack name={props.icon} size={props.iconSize || 20} style={styles.icon} />
        }
            <TextInput />
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       width: "100%"
    },
    inputContainer: {
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 2,
        backgroundColor: colors.nearlyWhite,
        flexDirection: "row",
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
        color: colors.gray,
    }
})

export default Input
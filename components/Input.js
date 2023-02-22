import { View, Text, StyleSheet, TextInput } from 'react-native'
import colors from '../constants/colors'

const Input = ({label}) => {
  return (
    <View style={styles.container}>
        <Text>{label}</Text>

        <View style={styles.inputContainer}>
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

    }
})

export default Input
import { View, Text, StyleSheet, TextInput } from 'react-native'
import colors from '../constants/colors'
import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'

const Input = (props) => {
    const [value, setValue] = useState(props.initialValue)

    const onChangeText = (text) => {
        setValue(text)
        props.onInputChanged(props.id, text)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>

            <View style={styles.inputContainer}>
                {props.icon && (
                    <props.iconPack
                        name={props.icon}
                        size={props.iconSize || 20}
                        style={styles.icon}
                    />
                )}
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    {...props}
                    value={value}
                />
            </View>

            {props.errorText && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{props.errorText[0]}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    label: {
        marginVertical: 8,
        fontFamily: 'bold',
        letterSpacing: 0.3,
        color: colors.textColor,
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 2,
        backgroundColor: colors.nearlyWhite,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
        color: colors.gray,
    },
    input: {
        color: colors.textColor,
        flex: 1,
        fontFamily: 'regular',
        letterSpacing: 0.3,
        paddingTop: 0,
    },
    errorContainer: {
        marginVertical: 5,
    },
    errorText: {
        color: 'red',
        fontSize: 13,
        fontFamily: 'regular',
        letterSpacing: 0.3,
    },
})

export default Input

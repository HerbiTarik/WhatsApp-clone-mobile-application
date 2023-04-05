import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const SubmitButton = (props) => {
    const enabledBgColor = props.color || colors.primary
    const disabledBgColor = colors.lightGray
    const bgColor = props.disabled ? disabledBgColor : enabledBgColor

    return (
        <TouchableOpacity
            onPress={props.disabled ? () => {} : props.onPress}
            style={{
                ...styles.button,
                ...{ backgroundColor: bgColor },
                ...props.style,
                ...props.color,
            }}
        >
            <Text style={{ color: props.disabled ? colors.gray : 'white' }}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
})

export default SubmitButton

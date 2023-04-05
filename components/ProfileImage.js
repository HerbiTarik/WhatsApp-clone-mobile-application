import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import userImage from '../assets/images/userImage.jpeg'
import colors from '../constants/colors'

const ProfileImage = (props) => {
    return (
        <View>
            <Image
                source={userImage}
                style={{
                    ...styles.image,
                    ...{ width: props.size, height: props.size },
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 50,
        borderColor: colors.gray,
        borderWidth: 1,
    },
})
export default ProfileImage

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import userImage from '../assets/images/userImage.jpeg'
import colors from '../constants/colors'
import { FontAwesome } from '@expo/vector-icons'
import { launchImagePicker } from '../utils/imagePickerHelper'
import { useState } from 'react'

const ProfileImage = (props) => {
    const source = props.uri ? { uri: props.uri } : userImage
    const [image, setImage] = useState(source)
    const pickImage = async () => {
        try {
            const tempUri = await launchImagePicker()

            if (!tempUri) return //S'il n y a pas d'url alors on ne fera rien
            //Upload the image
            setImage({ uri: tempUri })
        } catch (error) {
            console.logs(error)
        }
    }
    return (
        <TouchableOpacity onPress={pickImage}>
            <Image
                source={image}
                style={{
                    ...styles.image,
                    ...{ width: props.size, height: props.size },
                }}
            />
            <View style={styles.editIconContainer}>
                <FontAwesome name="pencil" size={15} color="black" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 50,
        borderColor: colors.gray,
        borderWidth: 1,
    },
    editIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: colors.lightGray,
        borderRadius: 20,
        padding: 8,
    },
})
export default ProfileImage

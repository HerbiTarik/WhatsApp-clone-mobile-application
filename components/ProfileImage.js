import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import userImage from '../assets/images/userImage.jpeg'
import colors from '../constants/colors'
import { FontAwesome } from '@expo/vector-icons'
import { launchImagePicker } from '../utils/imagePickerHelper'

const ProfileImage = (props) => {
    const pickImage = () => {
        launchImagePicker()
    }
    return (
        <TouchableOpacity onPress={pickImage}>
            <Image
                source={userImage}
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

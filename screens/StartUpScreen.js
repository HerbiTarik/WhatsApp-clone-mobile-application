import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import commonStyles from '../constants/commonStyles'
const StartUpScreen = () => {
    return (
        <View style={commonStyles.center}>
            <ActivityIndicator size="large" color={colors.primary} />
        </View>
    )
}

export default StartUpScreen

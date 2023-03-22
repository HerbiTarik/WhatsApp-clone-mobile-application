import { View, ActivityIndicator } from 'react-native'
import { useEffect } from 'react'
import colors from '../constants/colors'
import commonStyles from '../constants/commonStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { setDidTryAutoLogin } from '../store/authSlice'
const StartUpScreen = () => {
    const dispatch = useDispatch() // pour modifier le state on a besoin de dispatcher le state

    useEffect(() => {
        const tryLogin = async () => {
            const storedAuthInfo = await AsyncStorage.getItem('userData')

            //if storedAuthInfo didn't find any think for that "AsyncStorage.getItem("userData")"
            if (!storedAuthInfo) {
                dispatch(setDidTryAutoLogin())
                return
            }
        }
        tryLogin()
    }, [])
    return (
        <View style={commonStyles.center}>
            <ActivityIndicator size="large" color={colors.primary} />
        </View>
    )
}

export default StartUpScreen

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import logo from '../assets/images/logo.png'
import colors from '../constants/colors'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'
import PageContainer from '../components/PageContainer'

const AuthScreen = () => {
    const [isSignUp, setIsSignUp] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <KeyboardAvoidingView
                    style={styles.KeyboardAvoidingView}
                    behavior={Platform.OS === 'ios' ? 'height' : undefined}
                    keyboardVerticalOffset={100}
                >
                    <ScrollView>
                        <View style={styles.imageContainer}>
                            <Image
                                source={logo}
                                style={styles.image}
                                resizeMode="contain"
                            />
                        </View>
                        {isSignUp ? <SignUpForm /> : <SignInForm />}

                        <TouchableOpacity
                            onPress={() =>
                                setIsSignUp((prevState) => !prevState)
                            }
                            style={styles.linkContainer}
                        >
                            <Text style={styles.link}>{`Switch to ${
                                isSignUp ? 'sign in' : 'sign up'
                            }`}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </PageContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    linkContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    link: {
        color: colors.blue,
        fontFamily: 'medium',
        letterSpacing: 0.3,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '50%',
    },
    KeyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
    },
})
export default AuthScreen

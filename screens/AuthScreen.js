import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PageContainer from '../components/PageContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import { useState } from 'react';
import colors from '../constants/colors';


const AuthScreen = () => {

  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <PageContainer >
      {
        isSignUp ? <SignUpForm /> : <SignInForm />
      }

      <TouchableOpacity onPress={() => setIsSignUp(prevState => !prevState)} style={styles.linkContainer}>
        <Text style={styles.link} >{`Switch to ${isSignUp ? "sign in" : "sign up"}`}</Text>
      </TouchableOpacity>
      </PageContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  link: {
    color: colors.blue,
    fontFamily: 'medium',
    letterSpacing: 0.3

  }
})
export default AuthScreen;
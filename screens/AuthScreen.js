import { View, Text, StyleSheet } from 'react-native';
import PageContainer from '../components/PageContainer';
import { SafeAreaView } from 'react-native-safe-area-context';

const AuthScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PageContainer>
        <Text>Hello</Text>
      </PageContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})
export default AuthScreen;
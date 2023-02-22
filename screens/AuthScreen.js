import { View, Text, StyleSheet } from 'react-native';
import PageContainer from '../components/PageContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';

const AuthScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PageContainer >
        <Input label="First name" />
      </PageContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})
export default AuthScreen;
import { View, Text, StyleSheet } from 'react-native';
import PageContainer from '../components/PageContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import { FontAwesome } from '@expo/vector-icons';

const AuthScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PageContainer >
        <Input label="First name" icon="user-o" iconPack={FontAwesome} iconSize={20} />
      </PageContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})
export default AuthScreen;
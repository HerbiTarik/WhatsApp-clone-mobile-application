import { View, Text, StyleSheet } from 'react-native';
import PageContainer from '../components/PageContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import { FontAwesome, Feather } from '@expo/vector-icons';
import SubmitButton from '../components/SubmitButton';

const AuthScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PageContainer >
        <Input label="First name" icon="user-o" iconPack={FontAwesome} iconSize={20} />
        <Input label="Last name" icon="user-o" iconPack={FontAwesome} iconSize={20} />
        <Input label="Email" icon="mail" iconPack={Feather} iconSize={20} />
        <Input label="Password" icon="lock" iconPack={Feather} iconSize={20} />
        <SubmitButton title="Sign up" onPress={() => console.log("Button pressed")} style={{marginTop: 20}} />
      </PageContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})
export default AuthScreen;
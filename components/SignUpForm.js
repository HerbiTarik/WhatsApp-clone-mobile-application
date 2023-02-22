import Input from '../components/Input';
import { FontAwesome, Feather } from '@expo/vector-icons';
import SubmitButton from '../components/SubmitButton';
import { useState } from 'react';

const SignUpForm = () => {


  return (
    <>
    <Input label="First name" icon="user-o" iconPack={FontAwesome} iconSize={20} />
    <Input label="Last name" icon="user-o" iconPack={FontAwesome} iconSize={20} />
    <Input label="Email" icon="mail" iconPack={Feather} iconSize={20} />
    <Input label="Password" icon="lock" iconPack={Feather} iconSize={20} />
    <SubmitButton title="Sign up" onPress={() => console.log("Button pressed")} style={{marginTop: 20}} />
    </>
  )
}

export default SignUpForm
import Input from '../components/Input'
import { FontAwesome, Feather } from '@expo/vector-icons'
import SubmitButton from '../components/SubmitButton'
import {
    validateEmail,
    validateString,
    validatePassword,
} from '../utils/validationConstraints'

const SignUpForm = () => {
    const inputChangedHandler = (inputId, inputValue) => {
        if (inputId === 'firstName' || inputId === 'lastName') {
            console.log(validateString(inputId, inputValue))
        } else if (inputId === 'email') {
            console.log(validateEmail(inputId, inputValue))
        } else if (inputId === 'password') {
            console.log(validatePassword(inputId, inputValue))
        }
    }
    return (
        <>
            <Input
                id="firstName"
                label="First name"
                icon="user-o"
                autoCapitalize="none"
                iconPack={FontAwesome}
                iconSize={20}
                onInputChanged={inputChangedHandler}
            />
            <Input
                id="lastName"
                label="Last name"
                icon="user-o"
                autoCapitalize="none"
                iconPack={FontAwesome}
                iconSize={20}
                onInputChanged={inputChangedHandler}
            />
            <Input
                id="email"
                label="Email"
                icon="mail"
                keyboardType="email-address"
                autoCapitalize="none"
                iconPack={Feather}
                iconSize={20}
                onInputChanged={inputChangedHandler}
            />
            <Input
                id="password"
                label="Password"
                icon="lock"
                autoCapitalize="none"
                securseTextEntry
                iconPack={Feather}
                iconSize={20}
                onInputChanged={inputChangedHandler}
            />
            <SubmitButton
                title="Sign up"
                onPress={() => console.log('Button pressed')}
                style={{ marginTop: 20 }}
            />
        </>
    )
}

export default SignUpForm

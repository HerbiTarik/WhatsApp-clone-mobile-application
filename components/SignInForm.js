import Input from '../components/Input'
import { Feather } from '@expo/vector-icons'
import SubmitButton from '../components/SubmitButton'
import { validateInput } from '../utils/formActions'

const SignInForm = (props) => {
    const inputChangedHandler = (inputId, inputValue) => {
        console.log(validateInput(inputId, inputValue))
    }

    return (
        <>
            <Input
                id="email"
                label="Email"
                icon="mail"
                iconPack={Feather}
                iconSize={20}
                keyboardType="email-address"
                autoCapitalize="none"
                onInputChanged={inputChangedHandler}
            />
            <Input
                id="password"
                label="Password"
                icon="lock"
                autoCapitalize="none"
                secureTextEntry
                iconPack={Feather}
                iconSize={20}
                onInputChanged={inputChangedHandler}
            />
            <SubmitButton
                title="Sign in"
                onPress={() => console.log('Button pressed')}
                style={{ marginTop: 20 }}
            />
        </>
    )
}
export default SignInForm

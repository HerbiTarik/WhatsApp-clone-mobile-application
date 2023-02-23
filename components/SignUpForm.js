import Input from '../components/Input'
import { FontAwesome, Feather } from '@expo/vector-icons'
import SubmitButton from '../components/SubmitButton'
import { validate } from 'validate.js'

const SignUpForm = () => {
    const inputChangedHandler = (inputId, inputValue) => {
        if (inputId === 'firstName' || inputId === 'lastName') {
            const constraints = {
                presence: { allowEmpty: false },
            }

            if (inputValue !== '') {
                constraints.format = {
                    pattern: '[a-z]+',
                    flags: 'i',
                    message: 'Value can only contain letters',
                }
            }

            console.log(
                validate({ [inputId]: inputValue }, { [inputId]: constraints })
            )
        } else if (inputId === 'email') {
        } else if (inputId === 'password') {
        }
    }
    return (
        <>
            <Input
                id="firstName"
                label="First name"
                icon="user-o"
                iconPack={FontAwesome}
                iconSize={20}
                onInputChanged={inputChangedHandler}
            />
            <Input
                id="lastName"
                label="Last name"
                icon="user-o"
                iconPack={FontAwesome}
                iconSize={20}
                onInputChanged={inputChangedHandler}
            />
            <Input
                id="email"
                label="Email"
                icon="mail"
                iconPack={Feather}
                iconSize={20}
                onInputChanged={inputChangedHandler}
            />
            <Input
                id="password"
                label="Password"
                icon="lock"
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

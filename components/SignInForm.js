import { Feather } from '@expo/vector-icons'
import { useReducer, useCallback } from 'react'
import SubmitButton from '../components/SubmitButton'
import Input from '../components/Input'
import { validateInput } from '../utils/action/formActions'
import { reducer } from '../utils/reducers/formReducer'

const initialState = {
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false,
}

const SignInForm = (props) => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState)

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result })
        },
        [dispatchFormState]
    )

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
                errorText={formState.inputValidities['email']}
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
                errorText={formState.inputValidities['password']}
            />
            <SubmitButton
                title="Sign in"
                onPress={() => console.log('Button pressed')}
                style={{ marginTop: 20 }}
                disabled={!formState.formIsValid}
            />
        </>
    )
}
export default SignInForm

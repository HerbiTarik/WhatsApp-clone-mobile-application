import Input from '../components/Input'
import { FontAwesome, Feather } from '@expo/vector-icons'
import SubmitButton from '../components/SubmitButton'
import { validateInput } from '../utils/formActions'
import { useReducer } from 'react'

const reducer = (state, action) => {
    const { validationResult } = action
    return {
        ...state,
        formIsValide: validationResult === undefined,
    }
}

const initialState = {
    // inputValidities: {
    //     firstName: false,
    //     lastName: false,
    //     email: false,
    //     password: false,
    // },
    formIsValide: false,
}

const SignUpForm = (props) => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState)

    const inputChangedHandler = (inputId, inputValue) => {
        const result = validateInput(inputId, inputValue)
        dispatchFormState({ validationResult: result })
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
                disabled={!formState.formIsValide}
            />
        </>
    )
}

export default SignUpForm

import Input from '../components/Input'
import { FontAwesome, Feather } from '@expo/vector-icons'
import SubmitButton from '../components/SubmitButton'
import { validateInput } from '../utils/action/formActions'
import { useReducer, useCallback } from 'react'
import { reducer } from '../utils/reducers/formReducer'
import { signUp } from '../utils/action/authAction'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAMU58Pkddf4r3dwndnfBe1zl3hWg3TN9U',
    authDomain: 'whatsapp-b5cdc.firebaseapp.com',
    projectId: 'whatsapp-b5cdc',
    storageBucket: 'whatsapp-b5cdc.appspot.com',
    messagingSenderId: '596787758821',
    appId: '1:596787758821:web:a8bd2cc636a1e2a6a2f60c',
    measurementId: 'G-WPR5ZHYGXF',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const initialState = {
    inputValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    },
    inputValidities: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    },
    formIsValid: false,
}

const SignUpForm = (props) => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState)

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result, inputValue })
        },
        [dispatchFormState]
    )

    const authHandler = () => {
        signUp(
            formState.inputValues.firstName,
            formState.inputValues.lastName,
            formState.inputValues.email,
            formState.inputValues.password
        )
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
                errorText={formState.inputValidities['firstName']}
            />
            <Input
                id="lastName"
                label="Last name"
                icon="user-o"
                autoCapitalize="none"
                iconPack={FontAwesome}
                iconSize={20}
                onInputChanged={inputChangedHandler}
                errorText={formState.inputValidities['lastName']}
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
                title="Sign up"
                onPress={authHandler}
                style={{ marginTop: 20 }}
                disabled={!formState.formIsValid}
            />
        </>
    )
}

export default SignUpForm

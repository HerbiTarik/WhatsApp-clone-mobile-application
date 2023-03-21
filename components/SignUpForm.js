import { FontAwesome, Feather } from '@expo/vector-icons'
import { useReducer, useCallback, useState, useEffect } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import colors from '../constants/colors'
import Input from '../components/Input'
import { validateInput } from '../utils/action/formActions'
import { reducer } from '../utils/reducers/formReducer'
import { signUp } from '../utils/action/authAction'
import SubmitButton from '../components/SubmitButton'
import { useDispatch, useSelector } from 'react-redux'

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
    const dispatch = useDispatch()
    // const stateData = useSelector((state) => state.auth.userData) // le auth fait référence au auth de store.js
    // console.log(stateData)

    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [formState, dispatchFormState] = useReducer(reducer, initialState)

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result, inputValue })
        },
        [dispatchFormState]
    )

    useEffect(() => {
        if (error) {
            Alert.alert('An error occured', error, [{ text: 'Okay' }])
        }
    }, [error])

    const authHandler = async () => {
        try {
            setIsLoading(false)
            const action = signUp(
                formState.inputValues.firstName,
                formState.inputValues.lastName,
                formState.inputValues.email,
                formState.inputValues.password
            )
            dispatch(action)
            setError(null)
        } catch (error) {
            setError(error.message)
            setIsLoading(false)
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
            {isLoading ? (
                <ActivityIndicator
                    size={'small'}
                    color={colors.primary}
                    style={{ marginTop: 10 }}
                />
            ) : (
                <SubmitButton
                    title="Sign up"
                    onPress={authHandler}
                    style={{ marginTop: 20 }}
                    disabled={!formState.formIsValid}
                />
            )}
        </>
    )
}

export default SignUpForm

import { Feather } from '@expo/vector-icons'
import { useState, useReducer, useCallback, useEffect } from 'react'
import SubmitButton from '../components/SubmitButton'
import Input from '../components/Input'
import { validateInput } from '../utils/action/formActions'
import { reducer } from '../utils/reducers/formReducer'
import { signIn } from '../utils/action/authAction'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import colors from '../constants/colors'

// const isTestMode = true

const initialState = {
    inputValues: {
        email: '',
        password: '',
    },
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false,
}

const SignInForm = (props) => {
    const dispatch = useDispatch()
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

    const authHandler = useCallback(async () => {
        try {
            setIsLoading(true)
            const action = signIn(
                formState.inputValues.email,
                formState.inputValues.password
            )
            setError(null)
            await dispatch(action)
        } catch (error) {
            setError(error.message)
            setIsLoading(false)
        }
    }, [dispatch, formState])
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
                // value={formState.inputValues.email}
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
                // value={formState.inputValues.password}
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
                    title="Sign in"
                    onPress={authHandler}
                    style={{ marginTop: 20 }}
                    disabled={!formState.formIsValid}
                />
            )}
        </>
    )
}
export default SignInForm

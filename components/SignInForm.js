import Input from '../components/Input'
import { Feather } from '@expo/vector-icons'
import SubmitButton from '../components/SubmitButton'

const SignInForm = (props) => {
    return (
        <>
            <Input label="Email" icon="mail" iconPack={Feather} iconSize={20} />
            <Input
                label="Password"
                icon="lock"
                iconPack={Feather}
                iconSize={20}
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

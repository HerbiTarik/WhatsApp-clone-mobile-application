import { getFirebaseApp } from '../firebaseHelper'
import {
    createUserWithEmailAndPassword,
    getAuth,
    createUser,
} from 'firebase/auth'
import { getDatabase, ref, child, set } from 'firebase/database'

export const signUp = async (firstName, lastName, email, password) => {
    const app = getFirebaseApp()
    const auth = getAuth(app)

    try {
        const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        const { uid } = result.user

        const userData = await createUser(firstName, lastName, email, uid)

        console.log(result)
    } catch (error) {
        console.log(error)
        const errorCode = error.code

        let message = 'Something went wrong.'

        if (errorCode === 'auth/email-already-in-use') {
            message = 'This email is already in use'
        }

        throw new Error(message)
    }
}

const createUser = async (firstName, lastName, email, userId) => {
    const firstLast = `${firstName} ${lastName}`.toLowerCase()
    const userData = {
        firstName,
        lastName,
        firstLast,
        email,
        userId,
        signUpDate: new Date().toISOString(),
    }
    const dbRef = ref(getDatabase())
    const childRef = child(dbRef, `users/${userId}`)
    await set(childRef, userData)
    return userData
}

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

export const getFirebaseApp = () => {
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
    return initializeApp(firebaseConfig)
}

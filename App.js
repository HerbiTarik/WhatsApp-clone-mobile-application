import 'react-native-gesture-handler'
import { LogBox, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from 'react'
import * as Font from 'expo-font'
import AppNavigator from './navigation/AppNavigator'
import { Provider } from 'react-redux'
import { store } from './store/store'

LogBox.ignoreLogs(['AsyncStorage has been extracted'])

SplashScreen.preventAutoHideAsync() //Garder l'écran d'accueil(de démarrage) visible pendant que nous récupérons des ressources

export default function App() {
    const [appIsLoaded, setAppIsLoaded] = useState(false)

    useEffect(() => {
        const prepare = async () => {
            try {
                //Précharger les polices, faire les appels d'API nécessaires ici
                await Font.loadAsync({
                    black: require('./assets/fonts/Roboto-Black.ttf'),
                    blackItalic: require('./assets/fonts/Roboto-BlackItalic.ttf'),
                    bold: require('./assets/fonts/Roboto-Bold.ttf'),
                    boldItalic: require('./assets/fonts/Roboto-BoldItalic.ttf'),
                    italic: require('./assets/fonts/Roboto-Italic.ttf'),
                    light: require('./assets/fonts/Roboto-Light.ttf'),
                    lightItalic: require('./assets/fonts/Roboto-LightItalic.ttf'),
                    medium: require('./assets/fonts/Roboto-Medium.ttf'),
                    mediumItalic: require('./assets/fonts/Roboto-MediumItalic.ttf'),
                    regular: require('./assets/fonts/Roboto-Regular.ttf'),
                    thin: require('./assets/fonts/Roboto-Thin.ttf'),
                    thinItalic: require('./assets/fonts/Roboto-ThinItalic.ttf'),
                })
            } catch (error) {
                console.log(error)
            } finally {
                //Indiquer à l'application de rendre
                setAppIsLoaded(true)
            }
        }

        prepare()
    }, [])

    const onLayout = useCallback(async () => {
        if (appIsLoaded) {
            /*
            Cela indique à l'écran de démarrage de se cacher immédiatement ! Si nous appelons ceci après `setAppIsReady`, nous pourrions voir un écran vide pendant que l'application charge son état initial et rend ses premiers pixels. Au lieu de cela, nous cachons l'écran d'accueil une fois que nous savons que la vue racine a déjà effectué la mise en page.
            */
            await SplashScreen.hideAsync()
        }
    }, [appIsLoaded])

    if (!appIsLoaded) {
        return null
    }

    return (
        <Provider store={store}>
            <SafeAreaProvider style={styles.container} onLayout={onLayout}>
                <AppNavigator />
            </SafeAreaProvider>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    label: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'regular',
    },
})

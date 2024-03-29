import * as ImagePicker from 'expo-image-picker'
import { View, Text, Platform } from 'react-native'
import React from 'react'
import { getFirebaseApp } from './firebaseHelper'

export const launchImagePicker = async () => {
    await checkMediaPermissions()
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    })
    if (!result.canceled) {
        return result.uri
    }
}

export const uploadImageAsync = async (uri) => {
    const app = getFirebaseApp()

    const blob = await new Promis((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onload = function () {
            resolve(xhr.response)
        }
        xhr.onerror = function (e) {
            console.log(e)
            reject(new TypeError('Network request failed'))
        }

        xhr.responseType = 'blob'
        xhr.open('GET', uri, true)
        xhr.send()
    })
}

const checkMediaPermissions = async () => {
    if (Platform.OS !== 'web') {
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (permissionResult.granted === false) {
            return Promise.reject('We need permission to access your photos')
        }
    }
    return Promise.resolve()
}

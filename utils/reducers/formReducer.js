export const reducer = (state, action) => {
    const { validationResult, inputId, inputValue } = action // on peut l'écrire sous forme de "const {const inputId = action.inplutId}"

    const updatedValues = {
        ...state.inputValues,
        [inputId]: inputValue,
    }
    const updatedValidities = {
        ...state.inputValidities,
        [inputId]: validationResult,
    }

    let updatedFormIsValid = true

    for (const key in updatedValidities) {
        if (updatedValidities[key] !== undefined) {
            updatedFormIsValid = false
            break
        }
    }
    return {
        inputValues: updatedValues,
        inputValidities: updatedValidities,
        formIsValid: updatedFormIsValid,
    }
}

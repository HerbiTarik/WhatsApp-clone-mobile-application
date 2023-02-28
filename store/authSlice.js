import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        userData: null,
    },
    reducer: {
        authenticate: (state, action) => {
            const { payload } = action
            state.token = payload.token
            state.userData = payload.userData
        },
    },
})
export const authenticate = authSlice.actions.authenticate
export default authSlice.reducer

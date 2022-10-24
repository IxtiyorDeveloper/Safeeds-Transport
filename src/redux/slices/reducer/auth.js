import {createSlice, createSelector} from "@reduxjs/toolkit"
import {getCookie, removeCookie, setCookie} from "utils/cookie"

const loadUser = () => {
    try {
        const serializedUser = getCookie("user")
        if (!serializedUser) return null
        return JSON.parse(serializedUser)
    } catch (e) {
        return null
    }
}

const initialState = {
    user: loadUser(),
    reset_unique: ""
}

/**
 * Actions and Reducers
 */
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            setCookie("user", JSON.stringify(action?.payload))
            state.user = JSON.stringify(action?.payload)
        },
        reset: (state, action) => {
            setCookie("reset_unique", JSON.stringify(action?.payload?.uniqueId))
            state.reset_unique = JSON.stringify(action?.payload?.uniqueId)
        },
        logout: (authStore) => {
            removeCookie("access_token")
            removeCookie("refresh_token")
            removeCookie("user")
            authStore.user = null
        },
    },
})

export const {login, logout,reset} = authSlice.actions
export default authSlice.reducer

// Selectors
export const _getMe = createSelector(
    (store) => store.auth,
    authStore => authStore.user
)
export const _getUnique = createSelector(
    (store) => store.auth,
    authStore => authStore.reset_unique
)

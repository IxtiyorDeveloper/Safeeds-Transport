import {createSelector, createSlice} from "@reduxjs/toolkit"

const initialState = {
    isOpen: false
}

const slice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setToggleSidebar: (store, action) => {
            console.log(action.payload,"pay")
            store.isOpen = action.payload
        }
    }
})

export const {setToggleSidebar} = slice.actions
export default slice.reducer

export const getSidebarOpen = () => createSelector(
    store => store.main,
    state => state.isOpen
)

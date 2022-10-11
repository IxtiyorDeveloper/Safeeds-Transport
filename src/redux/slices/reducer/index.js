import { createSelector, createSlice} from "@reduxjs/toolkit"

const initialState = {
    rooms: {
        data: [],
        isLoading: false,
        isError: false
    }
}

const slice = createSlice({
    name: "roomsSlice",
    initialState,
    reducers: {
        setLoading: (store, {payload}) => {
            const {key, data} = payload
            store[key].isLoading = data
        },
        setError: (store, {payload}) => {
            const {key, data} = payload
            store[key].isError = data
        }
    }
})

export const {setLoading, setError} = slice.actions
export default slice.reducer

export const getCallStatus = (key) => createSelector(
    store => store.reducer,
    reducer => ({isLoading: reducer[key].isLoading, isError: reducer[key].isError}),
)

export const getData = (key) => createSelector(
    store => store.reducer,
    state => state[key].data
)

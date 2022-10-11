import {useMutation} from "react-query";
import api from "../api";

const signIn = async (data) => {
    try {
        const res = await api.post(`/auth/login`, data?.data)
        data?.dispatch({type: "user/login", payload: res?.data})
    } catch (err) {
        throw err.response
    }
}

export const useSignIn = ({onSuccess, onError}) => {
    return useMutation(data => signIn(data), {onSuccess, onError})
}
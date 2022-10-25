import {useMutation} from "react-query";
import api from "../api";
import {toast} from "react-toastify";

const signIn = async (data) => {
    try {
        const res = await api.post(`/auth/login`, data?.data)
        data?.dispatch({type: "user/login", payload: res?.data})
    } catch (err) {
        toast.error(err?.data?.error)
        throw err.response
    }
}

export const useSignIn = ({onSuccess, onError}) => {
    return useMutation(data => signIn(data), {onSuccess, onError})
}

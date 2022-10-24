import api from "../api";
import {useMutation} from "react-query";

const sendCode = async (data) => {
    try {
        return await api.post(`/auth/send-code`, data)
    } catch (err) {
        throw err
    }
}

const checkCode = async (data) => {
    try {
        const res = await api.post(`/auth/check-code`, data?.data)
        data?.dispatch({type: "user/reset", payload: res?.data})
    } catch (err) {
        throw err
    }
}

const resetPassword = async (data) => {
    try {
        const res = await api.put(`/auth/forget-password`, data?.data)
        data?.dispatch({type: "user/login", payload: res?.data?.token})
    } catch (err) {
        throw err
    }
}

export const useSendCode = ({onSuccess, onError}) => {
    return useMutation(
        data => sendCode(data),
        {
            onSuccess,
            onError,
        }
    )
}

export const useCheckCode = ({onSuccess, onError}) => {
    return useMutation(
        data => checkCode(data),
        {
            onSuccess,
            onError,
        }
    )
}

export const useResetPassword = ({onSuccess, onError}) => {
    return useMutation(
        data => resetPassword(data),
        {
            onSuccess,
            onError,
        }
    )
}
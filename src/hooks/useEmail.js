import api from "../api";
import {useMutation} from "react-query";

const sendEmail = async (data) => {
    try {
        await api.post(`/email/send`, data)
    } catch (err) {
        throw err
    }
}

export const useSendEmail = ({onSuccess, onError}) => {
    return useMutation(
        data => sendEmail(data),
        {
            onSuccess,
            onError,
        }
    )
}

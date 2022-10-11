import {useMutation, useQuery} from "react-query"
import {useParams} from "react-router-dom"
import api from "../api"

const getArticles = async () => {
    try {
        return await api.get("/article")
    } catch (err) {
        throw err
    }
}

export const getArticle = async (id) => {
    try {
        return await api.get(`/article/${id}`)
    } catch (err) {
        throw err
    }
}

const updateArticle = async (id, data) => {
    try {
        await api.put(`/article/${id}`, data)
    } catch (err) {
        throw err
    }
}

const deleteArticle = async (id) => {
    try {
        await api.delete(`/article/${id}`)
    } catch (err) {
        throw err
    }
}

const createArticle = async (data) => {
    try {
        await api.post(`/article`, data)
    } catch (err) {
        throw err
    }
}

export const useArticles = () => {
    return useQuery(["rates"], () => getArticles())
}

export const useArticle = () => {
    const {id} = useParams()
    return useQuery(["rate", id], () => getArticle(id), {
        enabled: !!id,
    })
}

export const useUpdateArticle = ({onSuccess, onError}) => {
    const {id} = useParams()
    return useMutation(data => updateArticle(id, data), {onSuccess, onError})
}

export const useDeleteArticle = ({onSuccess, onError}) => {
    const {id} = useParams()
    return useMutation(() => deleteArticle(id), {
        onSuccess,
        onError,
    })
}

export const useCreateArticle = ({onSuccess, onError}) => {
    return useMutation(
        data => createArticle(data),
            {
                onSuccess,
                onError,
            }
    )
}

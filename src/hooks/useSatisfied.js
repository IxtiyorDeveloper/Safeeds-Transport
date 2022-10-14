import {useMutation, useQuery} from "react-query"
import {useParams} from "react-router-dom"
import api from "../api"

const getSatisfieds = async () => {
    try {
        return await api.get("/satisfied")
    } catch (err) {
        throw err
    }
}

export const getSatisfied = async (id) => {
    try {
        return await api.get(`/satisfied/${id}`)
    } catch (err) {
        throw err
    }
}

const updateSatisfied = async (id, data) => {
    try {
        await api.put(`/satisfied/${id}`, data)
    } catch (err) {
        throw err
    }
}

const deleteSatisfied = async (id) => {
    try {
        await api.delete(`/satisfied/${id}`)
    } catch (err) {
        throw err
    }
}

const createSatisfied = async (data) => {
    try {
        await api.post(`/satisfied`, data)
    } catch (err) {
        throw err
    }
}

export const useSatisfieds = () => {
    return useQuery(["satisfieds"], () => getSatisfieds())
}

export const useSatisfied = () => {
    const {id} = useParams()
    return useQuery(["satisfied", id], () => getSatisfied(id), {
        enabled: !!id,
    })
}

export const useUpdateSatisfied = ({onSuccess, onError}) => {
    const {id} = useParams()
    return useMutation(data => updateSatisfied(id, data), {onSuccess, onError})
}

export const useDeleteSatisfied = ({onSuccess, onError}) => {
    const {id} = useParams()
    return useMutation(() => deleteSatisfied(id), {
        onSuccess,
        onError,
    })
}

export const useCreateSatisfied = ({onSuccess, onError}) => {
    return useMutation(
        data => createSatisfied(data),
        {
            onSuccess,
            onError,
        }
    )
}

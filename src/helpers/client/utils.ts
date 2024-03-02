
import { toast } from "sonner";
import axiosInstance from "./axiosInstance";

export const appName = 'Next 14 Boilerplate'

export const getApi = async (url: string) => {
    return new Promise(async (resolve, reject) => {
        return await axiosInstance().get(url).then(({ data }) => {
            resolve(data);
        }).catch((error) => {
            toast.error(error.message);
            reject(error);
        })
    })
}

type RequestModel = {
    url: string;
    data: Record<string, any>;
    successMessage?: string;
}
export const postApi = async ({ url, data, successMessage }: RequestModel) => {
    return new Promise(async (resolve, reject) => {
        return await axiosInstance().post(url, data).then(({ data }) => {
            if (successMessage)
                toast.success(successMessage);

            resolve(data);
        }).catch((error) => {
            toast.error(error.message);
            reject(error);
        })
    })
}

export const patchApi = async ({ url, data, successMessage }: RequestModel) => {
    return new Promise(async (resolve, reject) => {
        return await axiosInstance().patch(url, data).then(({ data }) => {
            if (successMessage)
                toast.success(successMessage);

            resolve(data);
        }).catch((error) => {
            toast.error(error.message);
            reject(error);
        })
    })
}

export const deleteApi = async ({ url, data, successMessage }: RequestModel) => {
    return new Promise(async (resolve, reject) => {
        return await axiosInstance().delete(url, data).then(({ data }) => {
            if (successMessage)
                toast.success(successMessage);

            resolve(data);
        }).catch((error) => {
            toast.error(error.message);
            reject(error);
        })
    })
}
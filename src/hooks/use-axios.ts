import { TEstudiante } from "@/types/estudiante";
import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";

export const useAxios = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>();
    const [data, setData] = useState<any>(null);

    const handleError = (error: unknown, message: string) => {
        if (axios.isAxiosError(error)) {
            setError(error.message || error.response?.data?.message || message);
        } else {
            setError(message);
        }
        console.error(error);
    };

    const makeRequest = async <T>(
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
        url: string,
        data?: any,
        config: object = {}
    ): Promise<T | void> => {
        setIsLoading(true);
        try {
            const res = await axios({
                method,
                url,
                data,
                ...config,
            });
            setData(res.data);
            return res.data;
        } catch (error) {
            handleError(error, `❌ Error realizando ${method} en ${url}`);
        } finally {
            setIsLoading(false);
        }
    };

    const GET = async <T>(url: string): Promise<T | void> => {
        return await makeRequest("GET", url);
    };

    const POST = async <T>(
        url: string,
        data: FormData,
        config: AxiosRequestConfig
    ): Promise<T | void> => {
        return await makeRequest("POST", url, data, config);
    };

    const PUT = async <T>(url: string, data: Partial<TEstudiante>): Promise<T | void> => {
        return await makeRequest("PUT", url, data);
    };

    const DELETE = async <T>(url: string): Promise<T | void> => {
        return await makeRequest("DELETE", url);
    };

    const PATCH = async <T>(
        url: string,
        data: FormData,
        config: AxiosRequestConfig
    ): Promise<T | void> => {
        return await makeRequest("PATCH", url, data, config);
    };

    return { GET, POST, PUT, DELETE, PATCH, isLoading, error, data };
};

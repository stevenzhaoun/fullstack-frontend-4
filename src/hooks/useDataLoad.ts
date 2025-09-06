import { useState, useEffect } from "react"

export const useDataLoad = <T>(apiLoader: () => Promise<T>) => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const data = await apiLoader()
                setData(data)
            } catch (error) {
                console.error(error)
                setData(null)
                setError(error as string)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    return {
        data,
        isLoading,
        error
    }
}
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null)

    const fetchData=async()=>{
        setIsLoading(true)

        try {
            const response = await axios.get('http://172.20.10.2:5000/api/products')
            setData(response.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            console.log('error:',error)
        }finally{
            setIsLoading(false)
        }
    }


    useEffect(()=>{
        fetchData()
    },[])


    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }

  return {data, isLoading, error, refetch}
}

export default useFetch
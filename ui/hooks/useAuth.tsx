// @ts-ignore
import React,{useContext,useEffect,useState,createContext} from 'react'
import {object,string,TypeOf, unknown}from 'zod'
import axios, { AxiosResponseHeaders } from 'axios'
export const createSessionSchema = object({
  
    email:string().nonempty({
      message:'Email is required'
    }),
    password:string().nonempty({
      message: 'Password is required'
    })
  
})

type CreateSessionInput = TypeOf<typeof createSessionSchema>;
const authContext = createContext<unknown>(unknown);

// available to any child component that calls useAuth
// @ts-ignore
export function ProvideAuth({children}){
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

// Hook for child components to get the auth object
// re-render when it changes
export const useAuth = () =>{
  return useContext(authContext)
}
// Provider hook that creates auth object
const useProvideAuth = () => {  
  const logout = async () => {
    const response = await axios
    .delete<AxiosResponseHeaders>(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/sessions`, {
      withCredentials: true,
    })
    return response?.status===200 
    
  }

  const isLoggedIn = async (url:string) =>{
    let error;
    const response = await axios.get(url,{
      withCredentials:true
    })
   
    if(response.status!==200){
      error = new Error(response.statusText)
      error.status = response.status 
      throw error
    }
    if(response.data){
      return response.data
    }
    return null
    
  }
  return {isLoggedIn,logout}



  
}

export default useAuth

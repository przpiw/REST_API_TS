import React, { createContext, useState, useContext,useEffect } from 'react'
import {object,string,TypeOf}from 'zod'
import axios, { AxiosResponseHeaders } from 'axios'
import { NextRouter, useRouter } from 'next/router';
interface User{
  _id:string;
  email:string;
  name:string;
  createdAt:Date;
  updatedAt:Date;
  __v:number;
  session:string;
  iat:number;
  exp:number;
}

export const AuthContext = createContext({});
export const createSessionSchema = object({
  
    email:string().nonempty({
      message:'Email is required'
    }),
    password:string().nonempty({
      message: 'Password is required'
    })
  
})

type CreateSessionInput = TypeOf<typeof createSessionSchema>;
export const AuthProvider:React.FC = ( {children} ) =>{
  const [user, setUser] = useState('John')
  const [error, setError] = useState(null)
  const router:NextRouter = useRouter();
 
  //Login user
  const login = async ( values:CreateSessionInput ) => {
    try{
      const {status,data} = await axios.post<AxiosResponseHeaders>(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/sessions`,values,{withCredentials:true})
      if(status===200){
        router.push('/')
      }
    }
    catch(e){
      setError(error)
    }
  
    
  }
  //Logout user
  const logout = async () => {
    const response = await axios
    .delete<AxiosResponseHeaders>(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/sessions`, {
      withCredentials: true,
    })
    router.push('/')
  }

  const isLoggedIn = async(user:string)=>{
    const {status} = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,{
      withCredentials:true
    })
   
    if(status!==200){
      router.push('/auth/login')
    }
  }

  return ( 
      <AuthContext.Provider value={{logout,user,isLoggedIn,login}}>
      {children}
      </AuthContext.Provider>
  )
}

export default AuthContext

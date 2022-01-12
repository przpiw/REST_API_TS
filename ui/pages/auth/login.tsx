import { useState } from "react";
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import {object,string,TypeOf}from 'zod'
import {useRouter} from 'next/router'
import axios from "axios"
import { LoginForm } from "../../components/LoginForm";
export const createSessionSchema = object({
  
    email:string().nonempty({
      message:'Email is required'
    }),
    password:string().nonempty({
      message: 'Password is required'
    })
  
})

type CreateSessionInput = TypeOf<typeof createSessionSchema>;

export default function LoginPage(){
  const router = useRouter()
 
  //Redirect if authenticated
  const [loginError,setLoginError] = useState("")
  const {register,formState:{errors},handleSubmit} = useForm<CreateSessionInput>({resolver:zodResolver(createSessionSchema)})
 
  async function onSubmit(values:CreateSessionInput){
    try{
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/sessions`,values,{withCredentials:true},)
      router.push('/')
    }catch(e){
      setLoginError(e.message)
    }
  }
  return (<>
  <p>{loginError}</p>
  <div className='flex flex-row w-full'>
      <div className='py-12 flex-1'>
        <div className='flex bg-white rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl'>
          <div
            className='hidden lg:block lg:w-1/2 bg-auto bg-no-repeat    '
            // style={{ backgroundImage: `url(${logoUrl})` }}
          ></div>
          <div className='w-full p-8 lg:w-1/2'>
            <h2 className='text-2xl font-semibold text-gray-600 text-center'>
              {/* {brand} */}
            </h2>
            <a
              className='flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100'
            >
              <h1 className='px-4 py-3 w-5/6 text-center text-gray-600 font-bold'>
              option
              </h1>
            </a>
            <div className='mt-4 flex items-center justify-between'>
              <span className='border-b border-red-700 w-1/5 lg:w-1/4'></span>
              <a
                href='#'
                className='text-xs text-center text-gray-500 uppercase'
              >
               Login
              </a>
              <span className='border-b w-1/5 border-red-700 lg:w-1/4'></span>
            </div>
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}



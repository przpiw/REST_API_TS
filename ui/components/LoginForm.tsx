
import { useState } from "react";
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import {object,string,TypeOf}from 'zod'
import {useRouter} from 'next/router'
import axios from "axios"
export const createSessionSchema = object({
  
    email:string().nonempty({
      message:'Email is required'
    }),
    password:string().nonempty({
      message: 'Password is required'
    })
  
})

type CreateSessionInput = TypeOf<typeof createSessionSchema>;
  const styles = {
  label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
  field:
    'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
  button:
    ' bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600',
  errorMsg: 'text-red-500 text-sm',
}

export const LoginForm = () => {
  const router = useRouter()
  const [loginError,setLoginError] = useState("")
  const {register,formState:{errors},handleSubmit} = useForm<CreateSessionInput>({resolver:zodResolver(createSessionSchema)})
 
  async function onSubmit(values:CreateSessionInput){
    try{
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/sessions`,values,{withCredentials:true})
      router.push('/')
    }catch(e){
      setLoginError(e.response.data)
    }
  }

  return <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label} htmlFor="Email">Email</label>
        <input className={styles.field} id="email" type="email" placeholder="Email" {...register('email')}/>
        <p className={styles.errorMsg}>{errors.email?.message}</p>
        <label className={styles.label} htmlFor="Password">Password</label>
        <input className={styles.field} id="password" type="password" placeholder="Password" {...register('password')}/>
        <p className={styles.errorMsg}>{errors.password?.message}</p>
        <p className={styles.errorMsg}>{loginError}</p>
        <div className='mt-8'>
          <button type='submit' className={styles.button}>
            Login
          </button>
        </div>
      </form>
  </>
}
import { useState } from "react";
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import {object,string,TypeOf}from 'zod'
import {useRouter} from 'next/router'
import axios from 'axios'

 const createUserSchema = object({
    name:string().nonempty({
      message: 'Name is required'
    }),
    password:string().nonempty({
      message:'Name is required'
    }).min(6,"Password too short - should be 6 chars minimum"),
    passwordConfirmation:string().nonempty({message:'Password confirmation is required'}),
    email:string().nonempty({
      message: 'Email is required'
    }).email('Not a valid email'),
    }).refine((data)=>data.password === data.passwordConfirmation,{
    message:"Passwords do not match",
    path:["passwordConfirmation"]
  })
type CreateUserInput = TypeOf<typeof createUserSchema>;

function RegisterPage(){
  const router = useRouter()
  const [registerError,setRegisterError] = useState("")
  const {register,formState:{errors},handleSubmit} = useForm<CreateUserInput>({resolver:zodResolver(createUserSchema)})
  
  async function onSubmit(values:CreateUserInput){
    try{
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/users`,values)
      router.push('/')
    }
    catch(e){
      setRegisterError(e.message) 
    }
  }
 

  return (<>
  <p>{registerError}</p>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-element">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="email" {...register('email')}/>
      <p>{errors.email?.message}</p>
    </div>
    <div className="form-element">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" placeholder="name" {...register('name')}/>
      <p>{errors.name?.message}</p>
    </div>
    <div className="form-element">
      <label htmlFor="password">Password</label>
      <input id="password" type="password" placeholder="password" {...register('password')}/>
      <p>{errors.password?.message}</p>
    </div>
    <div className="form-element">
      <label htmlFor="passwordConfirmation">Confirm Password</label>
      <input id="passwordConfirmation" type="password" placeholder="passwordConfirmation" {...register('passwordConfirmation')}/>
      <p>{errors.passwordConfirmation?.message}</p>
    </div>
    <button type="submit">Submit</button>
  </form>
  </>
  )

}

export default RegisterPage
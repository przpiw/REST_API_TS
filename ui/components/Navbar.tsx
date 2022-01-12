import type { GetServerSideProps, NextApiRequest, NextComponentType, NextPage } from 'next'
import useSWR, {mutate} from 'swr'
import fetcher from '../utils/fetcher'
//import {  useRouter } from 'next/router'
import { NextApiRequestCookies } from 'next/dist/server/api-utils'
import {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {useAuth} from '../hooks/useAuth'
import useUser from '../hooks/useUser'
import  { useRouter } from 'next/router'
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


const Navbar:React.FC  = () => {
  const router = useRouter()
  const auth:any = useAuth();
  const {loading,error,user,mutate} = useUser();
  if(loading)
    return <div><h3>loading..</h3></div>
if(error)
console.log(error)
  // if(error){
  //   // redirect to error page send error
  //   return <><h1>{(!loading && error.message) && error}</h1></>
  // }
  const handleLogout = async () =>{
    const req = await auth.logout()
    if(!req)
      console.error('error during logout')
    mutate(null)
    router.push('/auth/login')
  }
  
  
  
  return <div>
   {user?.name}<button onClick={()=>handleLogout()}>Logout</button></div>
};


// const fetchUserData = async (context:any)=>{
//   return await fetcher(
//     `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
//     context.req.headers
//   );
// }


// @ts-ignore
export const getServerSideProps: any = async (context) => {
  
  const accessToken:NextApiRequestCookies = context.req.cookies.accessToken
  const refreshToken:NextApiRequestCookies = context.req.cookies.refreshToken
  // //context.logout();
  
  // let data
  if(!accessToken || !refreshToken){
     return {
      redirect: {
      destination: "/auth/login",
      permanent: false,
    },
    props: {},
  }}

 // const data =  await fetchUserData(context)
 // console.log(data)
  return { props: { fallbackData: {}}
  
}};
export default Navbar;
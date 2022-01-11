import type { GetServerSideProps, NextApiRequest, NextComponentType, NextPage } from 'next'
import useSWR, {mutate} from 'swr'
import fetcher from '../utils/fetcher'
import {  useRouter } from 'next/router'
import { NextApiRequestCookies } from 'next/dist/server/api-utils'
import {useContext} from 'react'
import AuthContext from '../context/AuthContext'
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


const Navbar:React.FC<{ fallbackData: User,tokens:any }>  = ({ fallbackData,tokens }) => {
  // @ts-ignore
  const {logout,isLoggedIn} = useContext(AuthContext)
  const logoutUser = ()=>{
    logout();
  }
  
  const { data,error } = useSWR<User | null>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    fetcher,
    { fallbackData }
  )
  return <div>
    welcome {data?.name}<button onClick={()=>logoutUser()}>Logout</button><button onClick={()=>{isLoggedIn()}}>isLogged in?</button></div>
};


const fetchUserData = async (context:any)=>{
  return await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    context.req.headers
  );
}


// @ts-ignore
export const getServerSideProps: any = async (context) => {
  // const accessToken:NextApiRequestCookies = context.req.cookies.accessToken
  // const refreshToken:NextApiRequestCookies = context.req.cookies.refreshToken
  // //context.logout();
  
  // let data
  // if(!accessToken || !refreshToken){
  //    return {
  //     redirect: {
  //     destination: "/auth/login",
  //     permanent: false,
  //   },
  //   props: {},
  // };
  const data =  await fetchUserData(context)
  return { props: { fallbackData: data}
}};
export default Navbar;
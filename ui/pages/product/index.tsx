import type { NextPage } from 'next'
import useSWR, {mutate} from 'swr'
import fetcher from '../../utils/fetcher'
import {  useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
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


const Product: NextPage<{ fallbackData: User,tokens:any }> = ({ fallbackData,tokens }) => {
  const router = useRouter()

  const { data,error } = useSWR<User | null>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    fetcher,
    { fallbackData }
  )

  if(error)
    return (<a>Error Please log in</a>)

  if (data) {  
    return (<div>Welcome! {data.name} <br></br>
    <a>Products</a>
    <Navbar/>
    
    </div>)
  }
  
  return <div className={styles.container}>Please login</div>
};





export default Product;
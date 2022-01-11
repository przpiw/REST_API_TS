import type { NextPage } from 'next'
import useSWR, {mutate} from 'swr'
import fetcher from '../../utils/fetcher'
import {  useRouter } from 'next/router'
import Navbar from '../../components/Navbar'



const Product: NextPage = ()=> {
    return (<><Navbar/><div>Welcome!  <br></br>
    <a>Products</a>
    </div></>)
};
export default Product;
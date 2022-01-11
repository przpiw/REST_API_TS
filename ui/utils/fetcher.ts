import axios from 'axios'

const fetcher = <T>(url:string,headers={}):Promise<T>=>axios.get<T>(url,{headers,
withCredentials:true
// @ts-ignore
}).then(
  res=>res.data)


export default fetcher
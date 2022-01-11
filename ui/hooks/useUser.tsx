import useSWR from "swr";

import {useAuth} from './useAuth'

export default function useUser(){
  const auth = useAuth()

  const {data,mutate,error} = useSWR(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,auth.isLoggedIn,{
    refreshInterval: 600000, //10min,
    revalidateOnFocus: false,
    revalidateOnMount:true,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
  })

  const loading = !data && !error

  return{
    loading,error,user:data,mutate
  }

}
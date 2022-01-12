import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ProvideAuth } from '../hooks/useAuth'

function MyApp({ Component, pageProps }: AppProps) {
  
  return <ProvideAuth>
    <Component {...pageProps} /></ProvideAuth>
    
  
}



export default MyApp

import '../styles/globals.css'
import {  RecoilRoot } from 'recoil';
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Layout } from '../components'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
    
    
  )
}

export default MyApp


import "@patternfly/react-core/dist/styles/base.css"

import { SessionProvider as NextAuthProvider }  from "next-auth/react"
import { Provider as ReduxProvider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../app/store'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ReduxProvider store={ store }>
        <NextAuthProvider
            // Provider options are not required but can be useful in situations where
            // you have a short session maxAge time. Shown here with default values.
            session={ session }>
            <Component { ...pageProps } />
        </NextAuthProvider>
    </ReduxProvider>
  )
}

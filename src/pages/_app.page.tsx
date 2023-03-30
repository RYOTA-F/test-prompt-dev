import type { AppProps } from 'next/app'
/* styles */
import 'assets/globals.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App

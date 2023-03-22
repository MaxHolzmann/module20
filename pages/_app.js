import styles from '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className={styles}>
    <Component {...pageProps} />
    </div>
  )
}

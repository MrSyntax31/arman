import Theme from '../styles/theme';
import './HeroStyles.css'
import './A'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 
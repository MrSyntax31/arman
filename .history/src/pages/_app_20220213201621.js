import Theme from '../styles/theme';
import './HeroStyles.css'
import './AboutMe.scss'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 
import Theme from '../styles/theme';
import './HeroStyles.css'
import './AboutMe.css'
import './Tech.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 
import Theme from '../styles/theme';
import './HeroStyles.css'
//import './AboutMe.sass'
import './p'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 
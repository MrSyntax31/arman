import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
          <title>Arman | Portfolio</title>

          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>

          <script async src="https://api.countapi.xyz/hit/"
      </Head>
      <Layout>
       <Section grid>
        <Hero />
        <BgAnimation />
       </Section>
      <About />
      <Technologies />
      <Projects />
      <Timeline />
      <Acomplishments />
    </Layout>
    </>
  );
};

export default Home;

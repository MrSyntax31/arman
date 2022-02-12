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
          <t
      </Head>
      <Layout>
       <Section grid>
        <Hero />
        <BgAnimation />
       </Section>
      <About />
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
    </>
  );
};

export default Home;

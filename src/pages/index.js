import { Layout } from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
import Technologies from "../components/Technologies/Technologies";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <AboutMe />
      <Technologies />
    </Layout>
  );
}

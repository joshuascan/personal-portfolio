import { Layout } from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Technologies from "../components/Technologies/Technologies";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Technologies />
      <Projects />
    </Layout>
  );
}

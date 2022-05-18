import { Layout } from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import { SectionDivider } from "../styles/GlobalComponents";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SectionDivider />
      <Projects />
    </Layout>
  );
}

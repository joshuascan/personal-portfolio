import { Layout } from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import ContactForm from "../components/ContactForm/ContactForm";
import { Divider } from "../styles/GlobalComponents";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Technologies />
      <CaseStudies />
      <Divider />
      <Projects />
      <ContactForm />
    </Layout>
  );
}

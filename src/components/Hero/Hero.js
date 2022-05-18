import { Section } from "../../styles/GlobalComponents";
import {
  LeftSection,
  Name,
  RightSection,
  Rectangle,
  HeroText,
} from "./HeroStyles";

const Hero = () => {
  return (
    <Section row center>
      <LeftSection>
        <HeroText>
          Hi, I'm <br />
          <Name>Josh Scanlan</Name>
        </HeroText>
      </LeftSection>
      <RightSection>
        <Rectangle />
      </RightSection>
    </Section>
  );
};

export default Hero;

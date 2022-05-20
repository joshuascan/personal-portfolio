import Image from "next/image";
import { Section } from "../../styles/GlobalComponents";
import {
  LeftSection,
  Name,
  RightSection,
  Rectangle,
  ImageContainer,
  HeroText,
} from "./HeroStyles";
import headshot from "../../../public/images/josh_cartoony.jpg";

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
        {/* <Rectangle /> */}
        <ImageContainer>
          <Image src={headshot} alt="headshot" />
        </ImageContainer>
      </RightSection>
    </Section>
  );
};

export default Hero;

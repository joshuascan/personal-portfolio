import Image from "next/image";
import { Section } from "../../styles/GlobalComponents";
import {
  HeroWrapper,
  LeftSection,
  Name,
  RightSection,
  ImageContainer,
  HeroText,
} from "./HeroStyles";
import headshot from "../../../public/images/profile_pic.jpeg";

const Hero = () => {
  return (
    <HeroWrapper>
      <Section row center>
        <LeftSection>
          <HeroText>
            Hi, I&apos;m <br />
            <Name>Josh Scanlan</Name>
          </HeroText>
        </LeftSection>
        <RightSection>
          <ImageContainer>
            <Image src={headshot} alt="headshot" />
          </ImageContainer>
        </RightSection>
      </Section>
    </HeroWrapper>
  );
};

export default Hero;

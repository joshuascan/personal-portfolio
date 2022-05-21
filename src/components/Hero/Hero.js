import { Section } from "../../styles/GlobalComponents";
import {
  HeroWrapper,
  LeftSection,
  Name,
  RightSection,
  ImageContainer,
  HeroHeader,
  HeroText,
  Img,
  Rectangle,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroWrapper>
      <Section row center>
        <LeftSection>
          <HeroHeader>
            Hi, I&apos;m <br />
            <Name>Josh Scanlan,</Name>
            <br />
            Web Developer
          </HeroHeader>
          <HeroText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            rutrum justo nisi, luctus posuere dui dictum et. Quisque vulputate
            nec odio sit amet dignissim. Aenean fermentum feugiat lectus, in
            pulvinar neque sollicitudin nec.
          </HeroText>
        </LeftSection>
        <RightSection>
          <ImageContainer>
            <Img src="/images/profile_pic.jpeg" alt="headshot" />
            <Rectangle />
          </ImageContainer>
        </RightSection>
      </Section>
    </HeroWrapper>
  );
};

export default Hero;

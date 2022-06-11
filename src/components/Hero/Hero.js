import {
  HeroWrapper,
  HeroContent,
  LeftSection,
  Name,
  RightSection,
  ImageContainer,
  HeroHeader,
  FirstLine,
  Bolder,
  HeroText,
  Img,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroWrapper id="about">
      <HeroContent>
        <LeftSection>
          <HeroHeader>
            <Bolder>
              <FirstLine>Hi, I&apos;m</FirstLine>
              <Name>
                Josh
                <br /> Scanlan
              </Name>
            </Bolder>
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
            <Img
              src="/images/profile_pic_large.jpeg"
              layout={"fill"}
              objectFit={"contain"}
              alt="headshot"
            />
          </ImageContainer>
        </RightSection>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;

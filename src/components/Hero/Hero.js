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
            I&apos;m a developer based in the San Francisco Bay Area, with a
            particular excitement and drive towards front-end and
            blockchain-based development. When I&apos;m not working on a project
            or learning a new technology, I&apos;m most likely working towards
            filling up my iCloud storage with excessive photos of my cat.
          </HeroText>
        </LeftSection>
        <RightSection>
          <ImageContainer>
            <Img
              src="/images/headshot.jpeg"
              layout={"fill"}
              objectFit={"contain"}
              alt="headshot"
              priority
            />
          </ImageContainer>
        </RightSection>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;

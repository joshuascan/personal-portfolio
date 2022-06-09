import {
  FooterWrapper,
  FooterContainer,
  FooterText,
  NewLine,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>
          Designed by Andrea Wilson / <NewLine>Built by Josh Scanlan</NewLine>
        </FooterText>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

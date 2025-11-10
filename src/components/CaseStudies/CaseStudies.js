import Link from "next/link";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import styled from "styled-components";
import { caseStudies } from "../../constants/constants";
import {
  CaseStudiesWrapper,
  Card,
  ImgContainer,
  Img,
  CardContent,
  Title,
  Excerpt,
} from "./CaseStudiesStyles";

const CaseStudies = () => {
  const SectionHeading = styled(SectionTitle)`
    font-family: ${({ theme }) => theme.fonts.black};
    text-align: center;
    margin-top: 6rem;
    @media ${({ theme }) => theme.breakpoints.sm} {
      margin-top: 4rem;
    }
  `;
  const SectionWithOffset = styled(Section)`
    scroll-margin-top: 10rem;
    @media ${({ theme }) => theme.breakpoints.sm} {
      scroll-margin-top: 4rem;
    }
  `;
  return (
    <SectionWithOffset id="case-studies">
      <SectionHeading>Case Studies</SectionHeading>
      <CaseStudiesWrapper>
        {caseStudies.map(({ slug, title, excerpt, image, id }) => (
          <Link key={id} href={`/case-studies/${slug}`} passHref>
            <Card>
              <ImgContainer>
                <Img src={image} alt={title} layout="fill" objectFit="cover" />
              </ImgContainer>
              <CardContent>
                <Title>{title}</Title>
                <Excerpt>{excerpt}</Excerpt>
              </CardContent>
            </Card>
          </Link>
        ))}
      </CaseStudiesWrapper>
    </SectionWithOffset>
  );
};

export default CaseStudies;

import Link from "next/link";
import { Section } from "../../styles/GlobalComponents";
import { caseStudies } from "../../constants/constants";
import {
  ProjectsWrapper,
  ProjectContainer,
  ImageContainer,
  Img,
  InfoContainer,
  Header,
  Description,
  LinkList,
  ExternalLink,
} from "../Projects/ProjectsStyles";

const CaseStudies = () => {
  return (
    <Section nopadding id="case-studies">
      <ProjectsWrapper>
        {caseStudies.map(({ slug, title, excerpt, image, id }) => {
          const alignment = id % 2 === 0 ? "left" : "right";
          return (
            <ProjectContainer key={id} alignment={alignment}>
              <ImageContainer>
                <Img
                  src={image}
                  width={590}
                  height={390}
                  alt={title}
                  objectFit="cover"
                  objectPosition="top center"
                />
              </ImageContainer>
              <InfoContainer alignment={alignment}>
                <Header>{title}</Header>
                <Description>{excerpt}</Description>
                <LinkList alignment={alignment}>
                  <Link href={`/case-studies/${slug}`} passHref>
                    <ExternalLink alignment={alignment}>VIEW</ExternalLink>
                  </Link>
                </LinkList>
              </InfoContainer>
            </ProjectContainer>
          );
        })}
      </ProjectsWrapper>
    </Section>
  );
};

export default CaseStudies;

import { Section } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import {
  ProjectContainer,
  ImageContainer,
  Img,
  InfoContainer,
  Header,
  Description,
  LinkList,
  ExternalLink,
} from "./ProjectsStyles";

const Projects = () => {
  return (
    <Section nopadding id="projects">
      {projects.map(({ title, description, image, visit, source, id }) =>
        id % 2 === 0 ? (
          <ProjectContainer key={id}>
            <ImageContainer>{/* <Img src={image} /> */}</ImageContainer>
            <InfoContainer>
              <Header>{title}</Header>
              <Description>{description}</Description>
              <LinkList>
                <ExternalLink href={visit} target="_blank">
                  Deployed
                </ExternalLink>
                <ExternalLink href={source} target="_blank">
                  Source
                </ExternalLink>
              </LinkList>
            </InfoContainer>
          </ProjectContainer>
        ) : (
          <ProjectContainer key={id}>
            <InfoContainer right>
              <Header>{title}</Header>
              <Description>{description}</Description>
              <LinkList right>
                <ExternalLink right href={visit} target="_blank">
                  Deployed
                </ExternalLink>
                <ExternalLink right href={source} target="_blank">
                  Source
                </ExternalLink>
              </LinkList>
            </InfoContainer>
            <ImageContainer>{/* <Img src={image} /> */}</ImageContainer>
          </ProjectContainer>
        )
      )}
    </Section>
  );
};

export default Projects;

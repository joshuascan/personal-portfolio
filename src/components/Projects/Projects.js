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
  const handleClick = () => {
    alert("You're already here!");
  };

  return (
    <Section nopadding id="projects">
      {projects.map(
        ({ title, description, image, visit, source, contract, backend, id }) =>
          id % 2 === 0 ? (
            <ProjectContainer key={id}>
              <ImageContainer>{/* <Img src={image} /> */}</ImageContainer>
              <InfoContainer>
                <Header>{title}</Header>
                <Description>{description}</Description>
                <LinkList>
                  {title === "Portfolio Site" ? (
                    <ExternalLink onClick={handleClick}>Deployed</ExternalLink>
                  ) : (
                    <ExternalLink href={visit} target="_blank">
                      Deployed
                    </ExternalLink>
                  )}
                  <ExternalLink href={source} target="_blank">
                    Source
                  </ExternalLink>
                  {contract !== undefined ? (
                    <ExternalLink href={contract} target="_blank">
                      Contract
                    </ExternalLink>
                  ) : null}
                  {backend !== undefined ? (
                    <ExternalLink href={backend} target="_blank">
                      Backend
                    </ExternalLink>
                  ) : null}
                </LinkList>
              </InfoContainer>
            </ProjectContainer>
          ) : (
            <ProjectContainer key={id}>
              <InfoContainer right>
                <Header>{title}</Header>
                <Description>{description}</Description>
                <LinkList right>
                  {title === "Portfolio Site" ? (
                    <ExternalLink right onClick={handleClick}>
                      Deployed
                    </ExternalLink>
                  ) : (
                    <ExternalLink right href={visit} target="_blank">
                      Deployed
                    </ExternalLink>
                  )}
                  <ExternalLink right href={source} target="_blank">
                    Source
                  </ExternalLink>
                  {contract !== undefined ? (
                    <ExternalLink right href={contract} target="_blank">
                      Contract
                    </ExternalLink>
                  ) : null}
                  {backend !== undefined ? (
                    <ExternalLink right href={backend} target="_blank">
                      Backend
                    </ExternalLink>
                  ) : null}
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

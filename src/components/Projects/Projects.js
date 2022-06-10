import { Section } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
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
} from "./ProjectsStyles";

const Projects = () => {
  const handleClick = () => {
    alert("You're already here!");
  };

  return (
    <Section nopadding id="projects">
      <ProjectsWrapper>
        {projects.map(
          ({
            title,
            description,
            image,
            visit,
            source,
            contract,
            backend,
            id,
          }) => {
            return (
              <ProjectContainer key={id} id={id}>
                <ImageContainer>
                  <Img src={"https://picsum.photos/600/400"} />
                </ImageContainer>
                <InfoContainer id={id}>
                  <Header>{title}</Header>
                  <Description>{description}</Description>
                  <LinkList id={id}>
                    {title === "Portfolio Site" ? (
                      <ExternalLink onClick={handleClick} id={id}>
                        Deployed
                      </ExternalLink>
                    ) : (
                      <ExternalLink href={visit} target="_blank" id={id}>
                        Deployed
                      </ExternalLink>
                    )}
                    <ExternalLink href={source} target="_blank" id={id}>
                      Source
                    </ExternalLink>
                    {contract !== undefined ? (
                      <ExternalLink href={contract} target="_blank" id={id}>
                        Contract
                      </ExternalLink>
                    ) : null}
                    {backend !== undefined ? (
                      <ExternalLink href={backend} target="_blank" id={id}>
                        Backend
                      </ExternalLink>
                    ) : null}
                  </LinkList>
                </InfoContainer>
              </ProjectContainer>
            );
          }
        )}
      </ProjectsWrapper>
    </Section>
  );
};

export default Projects;

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
  LoginInfo,
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
            login,
            image,
            visit,
            source,
            contract,
            backend,
            id,
          }) => {
            const alignment = id % 2 === 0 ? "left" : "right";
            return (
              <ProjectContainer key={id} alignment={alignment}>
                <ImageContainer>
                  <Img src={image} alt={title} />
                </ImageContainer>
                <InfoContainer alignment={alignment}>
                  <Header>{title}</Header>
                  <Description>{description}</Description>
                  {login && <LoginInfo>{login}</LoginInfo>}
                  <LinkList alignment={alignment}>
                    {title === "Portfolio Site" ? (
                      <ExternalLink onClick={handleClick} alignment={alignment}>
                        Deployed
                      </ExternalLink>
                    ) : (
                      <ExternalLink
                        href={visit}
                        target="_blank"
                        alignment={alignment}
                      >
                        Deployed
                      </ExternalLink>
                    )}
                    <ExternalLink
                      href={source}
                      target="_blank"
                      alignment={alignment}
                    >
                      Source
                    </ExternalLink>
                    {contract !== undefined ? (
                      <ExternalLink
                        href={contract}
                        target="_blank"
                        alignment={alignment}
                      >
                        Contract
                      </ExternalLink>
                    ) : null}
                    {backend !== undefined ? (
                      <ExternalLink
                        href={backend}
                        target="_blank"
                        alignment={alignment}
                      >
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

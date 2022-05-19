import {
  Section,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import {
  GridContainer,
  Card,
  Hr,
  Img,
  TitleContent,
  Header,
  Description,
  TagList,
  Tag,
  LinkList,
  ExternalLink,
} from "./ProjectsStyles";

const Projects = () => {
  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ title, description, image, tags, visit, source, id }) => (
            <Card key={id}>
              <Img src={image} />
              <TitleContent>
                <Header title>{title}</Header>
                <Hr />
              </TitleContent>
              <Description>{description}</Description>
              <TitleContent>
                <Header>Technologies</Header>
              </TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
              <LinkList>
                <ExternalLink href={visit} target="_blank">
                  Deployed
                </ExternalLink>
                <ExternalLink href={source} target="_blank">
                  Source
                </ExternalLink>
              </LinkList>
            </Card>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;

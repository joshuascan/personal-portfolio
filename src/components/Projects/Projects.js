import {
  Section,
  SectionTitle,
  SectionText,
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
              <div>
                <TitleContent>Technologies</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <LinkList>
                <ExternalLink href={visit}>Deployed</ExternalLink>
                <ExternalLink href={source}>Source</ExternalLink>
              </LinkList>
            </Card>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;

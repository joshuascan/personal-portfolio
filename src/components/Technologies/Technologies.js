import { DiReact, DiDatabase } from "react-icons/di";
import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import {
  List,
  ListItem,
  ListContainer,
  ListTitle,
  ListParagraph,
} from "./TechnologiesStyles";

const Technologies = () => {
  return (
    <Section id="technologies">
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I&apos;ve worked with a range of technologies in the web development
        world.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React, Redux, Next.js, Ethers, SCSS, and Styled Components
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiDatabase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node, Express, Knex, Solidity, Hardhat, and PostgreSQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;

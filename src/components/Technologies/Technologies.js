import { DiReact, DiDatabase } from "react-icons/di";
import { Section } from "../../styles/GlobalComponents";
import { List, ListItem, ListTitle, ListParagraph } from "./TechnologiesStyles";

const Technologies = () => {
  return (
    <Section align>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React, Redux, Next.js, Ethers, MaterialUI, SCSS, and
            <br /> Styled Components
          </ListParagraph>
        </ListItem>
        <ListItem>
          <DiDatabase size="3rem" />
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node, Express, Knex, Solidity, Hardhat, and PostgreSQL
          </ListParagraph>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;

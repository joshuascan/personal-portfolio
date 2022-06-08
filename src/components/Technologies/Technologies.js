import { DiReact, DiDatabase } from "react-icons/di";
import { Section } from "../../styles/GlobalComponents";
import { List, ListItem, ListTitle, ListParagraph } from "./TechnologiesStyles";

const Technologies = () => {
  return (
    <Section align>
      <List>
        <ListItem>
          <DiReact size="4rem" />
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React, Redux, Next.js, Ethers, MaterialUI, Styled Components,
            Tailwind CSS, and Figma
          </ListParagraph>
        </ListItem>
        <ListItem>
          <DiDatabase size="4rem" />
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

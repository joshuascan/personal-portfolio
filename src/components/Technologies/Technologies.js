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
            React, Next.js, Typescript, Redux, Zustand, TanStack (React) Query,
            GraphQL, Viem, Ethers, Tailwind CSS, Panda CSS, and Styled
            Components.
          </ListParagraph>
        </ListItem>
        <ListItem>
          <DiDatabase size="4rem" />
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node, Express, Solidity, Hardhat, and PostgreSQL
          </ListParagraph>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;

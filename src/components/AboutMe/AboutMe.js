import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";

const AboutMe = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum
        justo nisi, luctus posuere dui dictum et. Quisque vulputate nec odio sit
        amet dignissim. Aenean fermentum feugiat lectus, in pulvinar neque
        sollicitudin nec. Donec varius nisi vitae convallis porttitor. Aenean
        lobortis est sed mi blandit, vel bibendum nisi facilisis. Donec in
        lobortis nulla.
      </SectionText>
    </Section>
  );
};

export default AboutMe;

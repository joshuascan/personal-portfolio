import { useState } from "react";
import { Section } from "../../styles/GlobalComponents";
import {
  Header,
  Form,
  Div1,
  Div2,
  SenderContainer,
  Label,
  Input,
  TextArea,
  SubmitButton,
} from "./ContactFormStyles";

const initialFormValues = {
  name: "",
  email: "",
  subject: "",
  body: "",
};

const ContactForm = () => {
  const [message, setMessage] = useState(initialFormValues);

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage(initialFormValues);
  };

  return (
    <Section>
      <Header>Say Hello</Header>
      <Form onSubmit={handleSubmit}>
        <SenderContainer>
          <Div1>
            <Label htmlFor="name">Name</Label>
            <Input
              small
              name="name"
              type="text"
              value={message.name}
              onChange={handleChange}
            />
          </Div1>
          <Div2>
            <Label htmlFor="email">Email</Label>
            <Input
              small
              name="email"
              type="email"
              value={message.email}
              onChange={handleChange}
            />
          </Div2>
        </SenderContainer>
        <Label htmlFor="subject">Subject</Label>
        <Input
          name="subject"
          type="text"
          value={message.subject}
          onChange={handleChange}
        />
        <Label htmlFor="body">Message</Label>
        <TextArea
          name="body"
          type="text"
          rows="8"
          value={message.body}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    </Section>
  );
};

export default ContactForm;

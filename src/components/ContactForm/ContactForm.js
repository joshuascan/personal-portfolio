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
  content: "",
};

const ContactForm = () => {
  const [message, setMessage] = useState(initialFormValues);

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    // setMessage(initialFormValues);
  };

  return (
    <Section id="contact">
      <Header>Say Hello</Header>
      <Form onSubmit={handleSubmit}>
        <SenderContainer>
          <Div1>
            <label htmlFor="name" />
            <Input
              small
              name="name"
              id="name"
              type="text"
              placeholder="Name"
              value={message.name}
              onChange={handleChange}
            />
          </Div1>
          <Div2>
            <label htmlFor="email" />
            <Input
              small
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              value={message.email}
              onChange={handleChange}
            />
          </Div2>
        </SenderContainer>
        <label htmlFor="subject" />
        <Input
          name="subject"
          id="subject"
          type="text"
          placeholder="Subject"
          value={message.subject}
          onChange={handleChange}
        />
        <label htmlFor="content" />
        <TextArea
          name="content"
          id="content"
          type="text"
          placeholder="Message..."
          rows="8"
          value={message.content}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    </Section>
  );
};

export default ContactForm;

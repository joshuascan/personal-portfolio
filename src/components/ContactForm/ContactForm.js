import { useState } from "react";
import { Section } from "../../styles/GlobalComponents";
import {
  Header,
  Form,
  Div1,
  Div2,
  SenderContainer,
  Input,
  FormNotification,
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
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (message.name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (message.email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (message.subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.content.length <= 0) {
      tempErrors["content"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
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
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setTimeout(() => {
          setShowFailureMessage(false);
        }, 5000);
        setButtonText("send");
        return;
      }
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    setMessage(initialFormValues);
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
            {errors?.name && (
              <FormNotification error>Name cannot be empty</FormNotification>
            )}
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
            {errors?.email && (
              <FormNotification error>
                Email address cannot be empty
              </FormNotification>
            )}
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
        {errors?.subject && (
          <FormNotification error>Subject cannot be empty</FormNotification>
        )}
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
        {errors?.content && (
          <FormNotification error>
            Message body cannot be empty
          </FormNotification>
        )}
        <SubmitButton type="submit">{buttonText}</SubmitButton>
        {showSuccessMessage && (
          <FormNotification center send>
            Your message has been delivered!
          </FormNotification>
        )}
        {showFailureMessage && (
          <FormNotification error center send>
            Oops! Something went wrong, please try again.
          </FormNotification>
        )}
      </Form>
    </Section>
  );
};

export default ContactForm;

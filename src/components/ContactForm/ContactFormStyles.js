import styled from "styled-components";

export const Header = styled.h3`
  text-align: center;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.primary};
  padding: 0.5rem 0;
  font-size: 8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SenderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: ${(props) => (props.small ? "347px" : "700px")};
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  letter-spacing: 0.17rem;
  &::placeholder {
    color: ${(props) => props.theme.colors.primary};
    opacity: 1;
    text-transform: uppercase;
  }
`;

export const TextArea = styled.textarea`
  width: 700px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 15px;
  letter-spacing: 0.17rem;
  resize: vertical;
  &::placeholder {
    color: ${(props) => props.theme.colors.primary};
    opacity: 1;
    text-transform: uppercase;
  }
`;

export const FormNotification = styled.p`
  position: relative;
  font-size: ${(props) => (props.send ? "2rem" : "1.6rem")};
  font-weight: ${(props) => (props.send ? "normal" : "lighter")};
  font-style: italic;
  text-align: ${(props) => (props.center ? "center" : "left")};
  color: ${(props) =>
    props.error ? "red" : `${(props) => props.theme.colors.secondary}`};
  bottom: 1rem;
  left: 1rem;
`;

export const SubmitButton = styled.button`
  font-size: 1.9rem;
  font-weight: bold;
  margin: 1rem auto 3rem auto;
  text-align: center;
  text-transform: uppercase;
  width: 150px;
  height: 54px;
  line-height: 27px;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.background};
  border: 3px solid ${(props) => props.theme.colors.primary};
  transition: 0.3s ease;
  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;

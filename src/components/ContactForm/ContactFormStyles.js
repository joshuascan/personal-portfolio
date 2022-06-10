import styled from "styled-components";

export const Header = styled.h3`
  text-align: center;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 0;
  font-size: 8rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.black};
  margin: 2rem 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 5.5rem;
    margin-top: 0;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    margin-top: 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding-top: 4rem;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
  }
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

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const Input = styled.input`
  caret-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  width: ${({ small }) => (small ? "344px" : "700px")};
  font-family: ${({ theme }) => theme.fonts.light};
  padding: 1.5rem;
  padding-top: 2rem;
  height: 50px;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  letter-spacing: 0.17rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
    text-transform: uppercase;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const TextArea = styled.textarea`
  caret-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  width: 700px;
  min-height: 225px;
  font-family: ${({ theme }) => theme.fonts.light};
  padding: 2rem 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 15px;
  letter-spacing: 0.17rem;
  resize: vertical;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
    text-transform: uppercase;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    min-height: 200px;
    margin-bottom: 1rem;
  }
`;

export const FormNotification = styled.p`
  position: relative;
  font-size: ${(props) => (props.send ? "2rem" : "1.6rem")};
  font-family: ${({ theme }) => theme.fonts.lightObl}, sans-serif;
  text-align: ${(props) => (props.center ? "center" : "left")};
  color: ${(props) =>
    props.error ? "red" : `${({ theme }) => theme.colors.secondary}`};
  bottom: 1rem;
  left: ${({ send }) => (send ? "0" : "1rem")};

  @media ${({ theme }) => theme.breakpoints.md} {
    bottom: ${({ send }) => (send ? "0" : "0.5rem")};
  }
`;

export const SubmitButton = styled.button`
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
  font-family: ${({ theme }) => theme.fonts.black};
  margin: 2rem auto 3rem auto;
  text-align: center;
  text-transform: uppercase;
  width: 140px;
  height: 55px;
  line-height: 55px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  transition: 0.3s ease;

  @media screen and (min-width: 769px) {
    &:hover {
      opacity: 0.65;
      cursor: pointer;
    }
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    transition: 0s;
    &:active {
      opacity: 0.65;
    }
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 1.5rem auto 1.5rem auto;
    font-size: 1.4rem;
    width: 120px;
    height: 45px;
    line-height: 45px;
    letter-spacing: 0.1rem;
    padding: 0 0.5rem;
  }
`;

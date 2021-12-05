import styled from "styled-components";

export const SignIn = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SignInForm = styled.form``;

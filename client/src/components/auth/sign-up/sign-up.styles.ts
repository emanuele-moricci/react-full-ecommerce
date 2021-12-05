import styled from "styled-components";

export const SignUp = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const SignUpForm = styled.form``;

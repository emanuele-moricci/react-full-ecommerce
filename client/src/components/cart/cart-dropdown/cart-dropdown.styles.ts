import styled from "styled-components";

export const CartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    right: unset;
    height: 80%;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  @media screen and (max-width: 800px) {
    height: 100%;
  }
`;

export const EmptyMessage = styled.span`
  margin: 50px auto;
  font-size: 18px;
`;

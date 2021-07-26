import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 80vh;
  box-sizing: border-box;

  padding: 20px;
  margin: 20px 0px;
  border-radius: 24px;

  background: #${(p) => p.theme.colors.primaryColor};

  @media (min-width: 500px) {
    height: 40vh;
  }

  @media (min-width: 1000px) {
    margin: 25px 0px;
    padding: 25px;

    width: 50%;
  }
`;

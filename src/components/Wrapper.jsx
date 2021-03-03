import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;

  margin: 15px;
  padding: 20px 15px;
  border-radius: 24px;

  background: #${p => p.theme.colors.primaryColor};

  @media (min-width: 1000px) {
    margin: 25px;
    padding: 25px;
  }

  @media (min-width: 1500px) {
    width: 40%;
  }
`;

import styled from "@emotion/styled";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Positioner = styled(Center)`
  width: 100%;
  height: 100vh;
  min-height: 85vh;
  color: red;
  font-size: 30px;
  background: linear-gradient(
    180deg,
    rgba(130, 217, 255, 0.5) 0%,
    rgba(251, 162, 247, 0.25) 69.79%,
    rgba(255, 152, 220, 0.175) 100%
  );
  @media all and (max-width: 500px) {
    height: 100vh;
  }
`;
export const Wrapper = styled(Center)`
  @media all and (max-width: 500px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
  width: 400px;
  height: 750px;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;
export const Button = styled.button`
  width: 22vh;
  height: 5.5vh;
  background: #ff8964;
  border-radius: 75px;
  border: none;
  color: #ffffff;
  font-style: normal;
  font-weight: 100;
  font-size: 0.8rem;
`;

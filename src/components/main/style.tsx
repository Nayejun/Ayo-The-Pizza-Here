import styled from "@emotion/styled";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Positioner = styled(Center)`
  width: 100%;
  height: 100vh;
  color: red;
  font-size: 30px;
  background: linear-gradient(180deg, rgba(130, 217, 255, 0.5) 0%, rgba(251, 162, 247, 0.25) 69.79%, rgba(255, 152, 220, 0.175) 100%);
`;
export const Wrapper = styled(Center)`
  width: 400px;
  height: 750px;
  flex-direction: column;
  background-color: #FFFFFF;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;
export const Text = styled.p`
  width: 57%;
  text-align: left;
  font-style: normal;
  font-weight: 200;
  font-size: 23px;
  line-height: 30px;
  color: #FF8964;
`;
export const Title = styled(Text)`
  width: 100%;
  margin: 0;
  text-align: center;
  font-weight: 800;
  font-size: 37px;
  line-height: 55px;
  color: #000000;
`;
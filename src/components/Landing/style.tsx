import styled from "@emotion/styled";

export const Center = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;
export const Positioner = styled(Center)`
   min-height: 90vh;
   width: 100%;
   height: 100vh;
   color: red;
   font-size: 30px;
   background: linear-gradient(
      180deg,
      rgba(130, 217, 255, 0.5) 0%,
      rgba(251, 162, 247, 0.25) 69.79%,
      rgba(255, 152, 220, 0.175) 100%
   );
   @media all and (max-width: 500px) {
      /* height: 90vh; */
      height: 100vh;
   }
`;
export const Wrapper = styled(Center)`
   width: 400px;
   height: 750px;
   flex-direction: column;
   background-color: #ffffff;
   box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 50px;

   @media all and (max-width: 500px) {
      width: 100%;
      /* height: 90vh; */
      height: 100vh;
      border-radius: 0;
   }

   .Hide {
      display: none;
   }
`;
export const TextWrapper = styled(Center)`
   width: 100%;
   flex-direction: column;
   justify-content: center;
   text-align: center;
`;
export const Text = styled.p`
   margin-top: 30vh;
   width: 100%;
   font-style: normal;
   font-weight: 200;
   font-size: 1.4rem;
   line-height: 30px;
   color: #ff8964;
   text-align: center;
`;
export const Title = styled(Text)`
   width: 100%;
   margin: 0;
   font-weight: 800;
   font-size: 2.3rem;
   line-height: 55px;
   color: #000000;
`;
export const Copyright = styled(Text)`
   margin-top: 30vh;
   width: 100%;
   text-align: center;
   font-style: normal;
   font-weight: 200;
   font-size: 0.9rem;
   letter-spacing: 0.01em;
   color: #000000;
`;

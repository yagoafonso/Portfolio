import styled from "styled-components";
import breakpoints from "../../breakpoints";

export const ContainerProjects = styled.div`
  display: flex;
  width: 100vw;
  max-width: ${breakpoints.device.laptop};
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  margin-bottom: 50px;
`
export const ProjectTitle = styled.h1`
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 22px;
    text-transform: uppercase;
`

export const ContainerProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1020px;
  margin-top: 50px;

  @media (max-width: ${breakpoints.device.laptop}) {
      align-items: center ;
      justify-content: center ;
    }
`
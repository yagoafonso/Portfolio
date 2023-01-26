import styled from "styled-components";
import breakpoints from "../../breakpoints";

export const ContainerProjects = styled.div`
  max-width: ${breakpoints.device.laptop};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
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
  max-width: 100%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: ${breakpoints.device.laptop}) {
      align-items: center ;
      justify-content: center ;
    }
`
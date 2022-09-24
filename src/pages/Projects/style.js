import styled from "styled-components";
import breakpoints from "../../breakpoints";

export const ContainerProjects = styled.div`
  background: var(--gray-900);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  margin-bottom: 50px;
`
export const ProjectTitle = styled.h1`
    font-weight: 700;
    font-size: 2.5rem;
    margin: 50px 0 30px;
    color: var(--blueviolet-300);
`
export const ContainerText = styled.p`
    font-size: 1.25rem;
    
    @media (max-width: ${breakpoints.device.laptop}) {
      text-align: center ;
    }
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
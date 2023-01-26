import styled from "styled-components";
import breakpoints from "../../breakpoints";

export const ContainerProjectCard = styled.div`
  width: 20rem;
  height: 38rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`
export const CardImg = styled.img`
  width: 20rem;
  height: 17.5rem;
  object-fit: cover;
  border-radius: 4px;

  @media (max-width: ${breakpoints.device.mobile}) {
    width: 15rem;
    height: 12rem;
  }
`
export const ContainerHead = styled.div`
  display: flex;
  width: 20rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 30px;
  color: white;
`
export const ContainerDescriptionProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const DescriptionProject = styled.div`
  text-align: justify;
  font-weight: 300;
  font-size: 1rem;
  line-height: 24px;
  height: 120px;
`
export const DescriptionTecnologiesUsed = styled.p`
  font-weight: 300;
  font-size: 0.875;
  line-height: 24px;
  white-space: nowrap;
  color: var(--blueviolet-800);
  
`
export const ContainerLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
` 
export const ContainerButton = styled.a`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg{
      width: 20px;
      height: 20px;
      color: white;

    :hover{
      color: var(--blueviolet-800);
    }
  }
`
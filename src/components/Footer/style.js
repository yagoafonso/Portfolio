import styled from 'styled-components'
import  breakpoints  from "../../breakpoints";

export const ContainerFooter = styled.footer`
  width: 100vw;
  max-width: ${breakpoints.device.laptop};
  height: 10vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
    text-align: center;
    white-space: nowrap;
  }
  @media (max-width: ${breakpoints.device.tablet}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  `
  export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    height: 40px;
    width: 300px;  
    
    @media (max-width: ${breakpoints.device.tablet}) {
      align-items: center;
      justify-content: center;
  }
  `
  export const Button = styled.a`
    svg{
      width: 20px;
      height: 20px;
    }

  `
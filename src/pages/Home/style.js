import styled from 'styled-components';
import breakpoints  from '../../breakpoints';

export const ContainerHome = styled.section`
  width: 100%;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.device.tablet}) {
      flex-direction: column;
  }
`
export const ContentShow = styled.div`
  width: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: red;

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  h1{
    line-height: 2rem;
    font-weight: 900;
    font-size: 2.5rem;
  }
  strong {
    color: var(--blueviolet-500);
  }
  span {
    color: var(--blueviolet-500);
    font-weight: 700; 
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.device.laptop}) {
    width: 30rem;
    height: 30rem;   
  }
  @media (max-width: ${breakpoints.device.tablet}) {
    width: 25rem;
    height: 25rem;
    font-size: 2rem;

    }
    @media (max-width: ${breakpoints.device.mobile}){
      width: 20rem;
      h1, span {
        font-size:  1.6rem;
      }
    }

`
export const ContentImg = styled.div`
  background: green;
  img {
    width: 25rem;

    object-fit: cover;
    @media (max-width: ${breakpoints.device.laptop}) {
      width: 25rem;
      height: 25rem;
    }
    @media (max-width: ${breakpoints.device.tablet}){
      display: none;
    }
  }


  
`
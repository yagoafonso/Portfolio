import styled from 'styled-components';
import breakpoints  from '../../breakpoints';

export const ContainerHome = styled.section`
  width: 100%;
  height: 80vh;
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
  align-items: flex-start;
  gap: 2rem;


  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  h1{
    font-weight: 400;
    font-size: 2.1rem;
    line-height: 41px;
  }
  strong {
    color: var(--blueviolet-500);
  }
  span {
    font-weight: 400;
    font-size: 2rem;
    line-height: 36px;
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
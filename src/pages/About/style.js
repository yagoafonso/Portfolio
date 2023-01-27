import styled from 'styled-components'
import breakpoints from '../../breakpoints'

export const ContainerAbout = styled.section`
  max-width: ${breakpoints.device.laptop};
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 30px; */

  @media (max-width: ${breakpoints.device.mobile}) {
    height: auto;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.device.tablet}) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`
export const ContentImgAbout = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  @media (max-width: ${breakpoints.device.mobile}) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${breakpoints.device.tablet}) {
    width: 100%;
    height: 100%;
  }
`

export const ContentTextAbout = styled.div`
  width: 50%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  
  p{
    text-align: justify;
    line-height: 1.5rem;
    strong{
      color: var(--blueviolet-300);
    }
  }
  @media (max-width: ${breakpoints.device.tablet}) {
    height: auto;
    align-items: center;
    justify-content: center;  
    width: 70%;
  }
`

export const ContainerSocial = styled.div`
  padding: 20px;
  p{
    text-align: center;
  }
`
export const ContainerSocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
export const SocialIcon = styled.a`
  width: 50%;
  height: 50px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid var(--gray-300);
  cursor: pointer;
  text-decoration: none;
  color: white;
  svg{
    width: 25px;
    height: 25px;
    color:var(--white);
    
    @media (max-width: ${breakpoints.device.mobile}) {
      display: none;
  }
  }

  :hover {
    background-color: var(--blueviolet-800);
    transition: 0.2s;
  }
`
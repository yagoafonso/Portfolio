import styled from 'styled-components'
import breakpoints from '../../breakpoints'

export const ContainerAbout = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  height: 80vh;
  gap: 30px;
  @media (max-width: ${breakpoints.device.tablet}) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 30px;
    height: 95vh;
    padding: 0;
  }
`
export const ContentImgAbout = styled.div`
  img{
    width: 20rem;
    height: 20rem;
    border-radius: 10px;
    box-shadow: -4px 4px black;
  }
`
export const ContentTextAbout = styled.div`
  width: 41rem;
  height: 20rem;
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
    align-items: center;
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
  width: 210px;
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
    
  }
  :hover {
    background-color: var(--blueviolet-800);
    transition: 0.2s;
  }
`
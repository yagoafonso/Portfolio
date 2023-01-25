import styled from 'styled-components';
import breakpoints  from '../../breakpoints';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`
export const Content = styled.div`
  width: ${breakpoints.device.laptop};
  height: 100%;
  display: flex;
  align-items: center;
  background: red;

  @media (max-width: ${breakpoints.device.tablet}) {
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
  }
`

export const ContentInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: ${breakpoints.device.tablet}) {
    width: 100%;
    align-items: center;
  }
`
export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`
export const Span = styled.span`
  font-weight: 400;
  font-size: 2.1rem;
  line-height: 2.5rem;
`

export const Name = styled.span`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.5rem;
  color: var(--blueviolet-800);
`
export const Developer = styled.span`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.5rem;
  white-space: nowrap;
`

export const ContentImg = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
  width: 100%;  
  object-fit: cover;

  @media (max-width: ${breakpoints.device.tablet}) {
    width: 90%;
    align-items: center;
  }
`
import styled from 'styled-components';
import breakpoints  from '../../breakpoints';

export const Container = styled.section`
  max-width: ${breakpoints.device.laptop};
  display: flex;
  height: 80vh;
  padding: 0 20px;

  @media (max-width: ${breakpoints.device.mobile}) {
    height: 75vh;
    padding: 0 5px;
  }

  @media (max-width: ${breakpoints.device.tablet}) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`

export const ContentInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`
export const Span = styled.span`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.5rem;

  @media (max-width: ${breakpoints.device.mobile}) {
    font-size: 1.5rem;
  }
`

export const Name = styled.span`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.5rem;
  color: var(--blueviolet-800);

  @media (max-width: ${breakpoints.device.mobile}) {
    font-size: 1.5rem;
  }
`
export const Developer = styled.div`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.5rem;
  white-space: nowrap;

  @media (max-width: ${breakpoints.device.mobile}) {
      font-size: 1.5rem;
  }
`

export const ContentImg = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
  width: 100%;
  object-fit: cover;

  @media (max-width: ${breakpoints.device.tablet}) {
    align-items: center;
  }
`
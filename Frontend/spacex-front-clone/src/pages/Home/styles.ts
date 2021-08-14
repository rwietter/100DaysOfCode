import styled from 'styled-components';

import { Link as link } from 'react-router-dom';

import colors from '../../globalStyles/colors';

export const Wrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
  opacity: 1;
  width: 100%;
`;

interface ContainerProps {
  id: string;
}

export const Container = styled.div.attrs<ContainerProps>(({ id }) => ({
  id: id === 'third' ? 'third' : '',
}))<ContainerProps>`
  height: ${(props) => (props.id === 'third' ? 'auto' : '100vh')};
  position: relative;
  margin: 0;
  padding: 0;
  background: ${(props) => (props.id === 'third' ? colors.secondary : '')};
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  margin: 4.5vh 0 0 0;
  position: absolute;
  width: 95%;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 3%;
  width: 100%;

  a {
    width: 20%;
  }
`;

export const Li = styled.li`
  color: ${colors.primary};
  font-size: 0.9rem;
  font-weight: bolder;
  margin-top: 0.5rem;
  padding: 0.5rem;
  @media (max-width: 936px) {
    display: none;
  }
`;

export const Img = styled.img`
  height: 100%;
  margin: 0;
  object-fit: cover;
  overflow: hidden;
  padding: 0;
  width: 100%;
`;

export const Logo = styled.img`
  width: 10rem;
  margin: 0;
  padding: 0;
  outline: none;
  margin-top: 8px;
  max-width: 14rem;
`;

export const Hamburguer = styled.button`
  background: ${colors.primary};
  border-radius: 50%;
  cursor: pointer;
  height: 2rem;
  outline: 0;
  position: absolute;
  width: 2rem;
`;

export const Link = styled(link)`
  color: ${colors.primary};
  cursor: pointer;
  text-decoration: none;
`;

export const CardLeft = styled.div`
  bottom: 15%;
  left: 3.125rem;
  max-width: ${(props) => (props.id === 'third' ? '25rem' : '50rem')};
  position: absolute;
  right: auto;
  text-align: left;
  top: auto;
  & {
    color: ${colors.primary};
    line-height: 2rem;
  }
  h1 {
    font-size: ${(props) => (props.id === 'primary' ? 'clamp(16px, 7vw, 2rem)' : 'clamp(16px, 5vw, 2rem)')};
    line-height: 2.5rem;
  }
  h3 {
    font-size: clamp(16px, 7vw, 1.5rem);
  }
  p {
    margin-top: 16px;
    line-height: 26px;
    font-size: clamp(16px, 7vw, 2rem);
    max-width: 80%;
  }
  @media (max-width: 795px) {
    max-width: 20rem;
  }
`;

export const Button = styled.button`
  background: transparent;
  border-color: ${colors.primary};
  border: 2px solid;
  color: ${colors.primary};
  font-size: clamp(0.625rem, 3vw, 1.125rem);
  height: 3.5rem;
  margin-top: 12%;
  outline: 0;
  padding: 1rem;
  width: clamp(120px, 40vw, 14rem);
  cursor: pointer;
`;

export const ContainerVideo = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 608px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;

export const Picture = styled.picture`
  display: none;
  @media (max-width: 815px) {
    display: flex;
    max-width: 60%;
    top: auto;
    bottom: auto;
    padding: 3.125rem;
    position: relative;
    -webkit-transform: none;
    transform: none;
  }
  @media (max-width: 608px) {
    flex: 1;
    display: block;
    max-width: 100%;
  }
  img {
    object-fit: scale-down;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
  }
`;

export const Video = styled.div`
  max-width: 50%;
  padding: 3.125rem;
  @media (max-width: 815px) {
    display: none;
  }
`;

export const CardVideo = styled.div`
  left: 1.25rem;
  max-width: 28rem;
  position: absolute;
  height: auto;
  display: flex;
  flex-direction: column;
  top: 20%;
  text-align: left;
  & {
    color: ${colors.primary};
    line-height: 3rem;
  }
  h1 {
    font-size: clamp(16px, 6vw, 2rem);
    line-height: 2.5rem;
  }
  p {
    margin-top: 16px;
    line-height: 2rem;
    font-size: clamp(16px, 5vw, 1.5rem);
    max-width: 70%;
  }

  @media (max-width: 790px) {
    max-width: 18rem;
    p {
      font-size: clamp(16px, 4vw, 1rem);
      line-height: 1.5rem;
      max-width: 80%;
    }
    h1 {
      line-height: 2.5rem;
    }
  }
  @media (max-width: 608px) {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    -webkit-transform: none;
    transform: none;
    padding: 40px 20px;
    width: auto;
    max-width: 100%;

    h1 {
      line-height: 2rem;
    }
    p {
      font-size: clamp(16px, 4vw, 1rem);
      max-width: 80%;
    }
  }
  @media (max-width: 300px) {
    h1 {
      line-height: 1.5rem;
    }
  }
`;

export const CardRight = styled.div`
  bottom: 15%;
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-end;
  max-width: 30rem;
  position: absolute;
  text-align: left;
  top: fixed;
  right: 15%;
  margin-left: 3.125rem;
  p {
    margin-top: 26px;
    font-size: clamp(12px, 6vw, 1.5rem);
  }
  h1 {
    font-size: clamp(16px, 7vw, 2rem);
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${colors.secondary};
  height: 10%;
  @media (max-width: 608px) {
    height: auto;
  }
  ul {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    list-style: none;
    & {
      color: ${colors.primary};
    }
    li {
      font-size: clamp(8px, 3vw, 16px);
      padding: 14px;
      font-weight: bold;
      cursor: pointer;

      a {
        color: ${colors.primary};
        text-decoration: none;
        &:hover {
          color: ${colors.third};
        }
      }

      &:first-child {
        color: ${colors.fourth};
        font-weight: 500;
      }
    }
  }
`;

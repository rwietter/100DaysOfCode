import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 80vw;
  width: 60vw;
  height: 100vh;
  display: block;
  margin: 0 auto;
  cursor: default;
  transition: color 0.1s linear, ease-out 0.1s ease-out 1s,
    background 0.1s ease-out;
  -webkit-transition: color 0.1s linear, ease-out 0.1s ease-out 1s,
    background 0.1s ease-out;
  -moz-transition: color 0.1s linear, ease-out 0.1s ease-out 1s,
    background 0.1s ease-out;
  -ms-transition: color 0.1s linear, ease-out 0.1s ease-out 1s,
    background 0.1s ease-out;
  -o-transition: color 0.1s linear, ease-out 0.1s ease-out 1s,
    background 0.1s ease-out;
  @media (max-width: 768px) {
    max-width: 80vw;
  }
`

const Container = styled.div`
  padding: 2rem;
  max-width: 60vw;
  display: block;
  padding: 0;
  @media (max-width: 768px) {
    max-width: 50vw;
  }
`
const H1 = styled.h1`
  font-size: 1.2vw;
`

const ListItem = styled.li`
  list-style: disc;
  margin: 1.5vh auto;
`

const ListItemLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.link};
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.link};
  }
`

export { Wrapper, Container, H1, ListItem, ListItemLink }

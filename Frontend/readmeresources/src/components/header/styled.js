import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 5vh;
`

const Readme = styled.h1`
  font-weight: bold;
  font-size: 2.5vw;
  color: ${({ theme }) => theme.title};
`

const HeaderTitle = styled.h1`
  margin: 2rem auto;
  line-height: 3vh;
  font-size: 1.4vw;
`

const HeaderHr = styled.hr`
  border: 0;
  height: 1px;
  background: ${({ theme }) => theme.hr};
`

const Badges = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1vw;
  flex-direction: row;
  flex-wrap: wrap;
`
const Badge = styled.span`
  margin: 0.667vw;
`

export { Container, Readme, HeaderTitle, HeaderHr, Badges, Badge }

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Links from "../links/table"
import { Wrapper, Container, H1, ListItem, ListItemLink } from "./styled"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Wrapper>
      <main>{children}</main>
      <Container>
        <H1>Table of Contents</H1>
        <ul>
          {Links.map(({ id, name }) => (
            <ListItem key={id}>
              <ListItemLink href={`#${id}`}>{name}</ListItemLink>
            </ListItem>
          ))}
        </ul>
        <div style={{ marginTop: "100vh" }}>
          <p id="learning">Learning</p>
        </div>
      </Container>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
/*
   <ListItemLink
    href={li.link}
    target="_blank"
    rel="noopener noreferrer"
  >
  {li.name}
</ListItemLink>
*/

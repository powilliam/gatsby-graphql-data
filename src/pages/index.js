import React from "react";
import { graphql, Link } from 'gatsby';

import styled from 'styled-components';

import Layout from '../components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;

  h1 {
    align-self: flex-start;
    color: #7159c1;
    font-size: 20px;
  }

  .files-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 300px));
    justify-items: center;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin: 25px 0px;
    padding: 0px 25px;
  }

  .file-container {
    width: 100%;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, .09);
    padding: 25px;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.headerColor};
    color: ${props => props.theme.textColor};
    border-radius: 3px;
  }
`

export default ({ data }) => {
  return (
      <Layout>
        <Container>
          <h1>Files found with graphql</h1>
          <section className="files-container">
            { data.allFile.edges.map(file => (
              <article key={file.node.id} className="file-container">
                <strong>Filename: {file.node.name}</strong>
                <span>Extension: {file.node.extension}</span>
              </article>
            )) }
          </section>
        </Container>
      </Layout>
  )
}


// GraphQL queries just should work inside Pages Components
// To use inside Non-Page Components, try useStaticQuery API

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          name
          extension
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
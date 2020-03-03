import React from "react";
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export default ({ data }) => {
    return (
        <Layout 
            title={data.site.siteMetadata.title}
        >
            <h1>Getting Started</h1>
            <p>GraphQL queries just should work inside Pages Components. To use inside Non-Page Components, try useStaticQuery API</p>
            <p>
                <strong>Query being received: </strong>
                {JSON.stringify(data)}
            </p>
        </Layout>
    )
}


// GraphQL queries just should work inside Pages Components
// To use inside Non-Page Components, try useStaticQuery API

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
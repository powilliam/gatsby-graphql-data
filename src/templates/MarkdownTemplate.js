import React from 'react';
import { graphql } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/Layout';

export default ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <Container>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Container>
        </Layout>
    )

}

export const query = graphql`
    query($slug: String!) {
            markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px;

    color: ${props => props.theme.textColor};

    h1, h2 {
        align-self: flex-start;
        color: #7159c1;
    }

    h1 {
        margin: 25px 0px 10px 0px;
    }

    h2 {
        margin: 5px 0px; 
    }
`
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({
            node,
            getNode,
            basePath: 'pages/docs'
        }); // Output: docs/markdown-file-name
        
        createNodeField({
            node,
            name: `slug`,
            value: slug
        }); // Will insert the slug into the MarkdownRemark table
    }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
      query {
          allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                  excerpt
                  frontmatter {
                    title
                  }
                  id
                }
              }
          }
      }
  `)

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(__dirname, 'src', 'templates', 'MarkdownTemplate.js'), 
      context: {
        slug: node.fields.slug
      }
    })
  });
}
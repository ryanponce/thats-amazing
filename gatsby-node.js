const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const showTemplate = path.resolve(`src/templates/show.js`)
  return graphql(`
    {
      allAirtable(filter: {table: {eq: "Shows"}}) {
        edges {
          node {
            data {
              name
              slug
              episodes{
                recordId 
                data {
                  title
                  slug
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allAirtable.edges.forEach(show => {
      createPage({
        path: `/shows/${show.node.data.slug}`,
        component: showTemplate,
        context: {
          show
        },
      })
    })
  })
}
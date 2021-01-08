const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const createPage = actions;
  const results = await graphql(`{
    allContentfulBlog {
        nodes {
          title
          slug
          author
          shortDescription
          createdAt
          fullDescription {
            raw
          }
          image {
            fluid {
              src
            }
          }
        }
      }
    }`)
  // console.log(JSON.stringify(results));
  results.data.allContentfulBlog.nodes.forEach((obj) => {
    actions.createPage({
      path: `blogs/blog/${obj.slug}`,
      component: path.resolve(`./src/templates/blog.tsx`),
      context: {
        item: obj
      }
    })
  })

const data = results.data.allContentfulBlog.nodes;

    actions.createPage({
      path: "blogs",
      component: path.resolve(`./src/templates/blogs.tsx`),
      context: {
        item: data
      }
    })
}

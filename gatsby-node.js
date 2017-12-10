const path = require('path');

exports.onCreateNode = ({node}) => {
    console.log(`onCreateNode:`, node.internal.type);
}

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {
        const artistDetailPageTemplate = path.resolve(`./src/templates/artist-detail.js`);
        resolve(
            graphql(`
                query getAllArtists {
                  allArtists {
                    edges {
                      artist: node {
                        id
                        name
                        slug
                        picture {
                          id
                          handle
                          width
                          height
                        }
                        records {
                          id
                          slug
                          title
                        }
                      }
                    }
                  }
                }
            `
            ).then(result => {
                if(result.errors) {
                    reject(result.errors)
                }

                const artists = result.data.allArtists.edges;
                console.log("artists: ", artists);
                artists.forEach((node) => {
                    console.log("createPages node: ", node);
                    const path = "artists/" + node.artist.slug;
                    console.log("createPages path: ", path);
                    createPage({
                        path,
                        component: artistDetailPageTemplate,
                        // If you have a layout component at src/layouts/blog-layout.js
                        //layout: `blog-layout`,
                        // In your blog post template's graphql query, you can use path
                        // as a GraphQL variable to query for data from the markdown file.
                        context: {
                            slug: node.artist.slug
                        }
                    })
                })
            })
        );
    });
};
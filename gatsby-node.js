<<<<<<< HEAD
const path = require(`path`)
const queryAll = require(`./gatsby/queryAll.js`)

exports.onCreateNode = ({ node }) => {
  console.log(`onCreateNode:`, node.internal.type)
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
=======
const path = require(`path`);
const queryAll = require(`./gatsby/queryAll.js`);

exports.onCreateNode = ({ node }) => {
  console.log(`onCreateNode:`, node.internal.type);
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin

  return new Promise((resolve, reject) => {
    const artistDetailPageTemplate = path.resolve(
      `./src/templates/artist-detail.js`
<<<<<<< HEAD
    )
    const recordDetailPageTemplate = path.resolve(
      `./src/templates/record-detail.js`
    )
    const reviewDetailPageTemplate = path.resolve(
      `./src/templates/review-detail.js`
    )
=======
    );
    const recordDetailPageTemplate = path.resolve(
      `./src/templates/record-detail.js`
    );
    const reviewDetailPageTemplate = path.resolve(
      `./src/templates/review-detail.js`
    );
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin

    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) {
<<<<<<< HEAD
          reject(result.errors)
        }

        const artists = result.data.allArtists.edges
        console.log(`artists: `, artists)
        artists.forEach(node => {
          console.log(`createPages node: `, node)
          const path = `artists/` + node.artist.slug
          console.log(`createPages path: `, path)
=======
          reject(result.errors);
        }

        const artists = result.data.allArtist.edges;
        artists.forEach(node => {
          const path = `artists/` + node.artist.slug;
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
          createPage({
            path,
            component: artistDetailPageTemplate,
            context: {
<<<<<<< HEAD
              slug: node.artist.slug,
            },
          })
        })

        const records = result.data.allRecords.edges
        console.log(`records: `, records)
        records.forEach(node => {
          console.log(`createPages node: `, node)
          const path = `records/` + node.record.slug
          console.log(`createPages path: `, path)
=======
              slug: node.artist.slug
            }
          });
        });

        const records = result.data.allRecord.edges;
        records.forEach(node => {
          const path = `records/` + node.record.slug;
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
          createPage({
            path,
            component: recordDetailPageTemplate,
            context: {
<<<<<<< HEAD
              slug: node.record.slug,
            },
          })
        })

        const reviews = result.data.allReviews.edges
        console.log(`reviews: `, reviews)
        reviews.forEach(node => {
          console.log(`createPages node: `, node)
          const path = `reviews/` + node.review.slug
          console.log(`createPages path: `, path)
=======
              slug: node.record.slug
            }
          });
        });

        const reviews = result.data.allReview.edges;
        reviews.forEach(node => {
          const path = `reviews/` + node.review.slug;
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
          createPage({
            path,
            component: reviewDetailPageTemplate,
            context: {
<<<<<<< HEAD
              slug: node.review.slug,
            },
          })
        })
      })
    )
  })
}
=======
              slug: node.review.slug
            }
          });
        });
      })
    );
  });
};
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin

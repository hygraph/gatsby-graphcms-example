const path = require(`path`);
const queryAll = require(`./gatsby/queryAll.js`);

exports.onCreateNode = ({ node }) => {
  console.log(`onCreateNode:`, node.internal.type);
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const artistDetailPageTemplate = path.resolve(
      `./src/templates/artist-detail.js`
    );
    const recordDetailPageTemplate = path.resolve(
      `./src/templates/record-detail.js`
    );
    const reviewDetailPageTemplate = path.resolve(
      `./src/templates/review-detail.js`
    );

    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const artists = result.data.allArtists.edges;
        console.log(`artists: `, artists);
        artists.forEach(node => {
          console.log(`createPages node: `, node);
          const path = `artists/` + node.artist.slug;
          console.log(`createPages path: `, path);
          createPage({
            path,
            component: artistDetailPageTemplate,
            context: {
              slug: node.artist.slug
            }
          });
        });

        const records = result.data.allRecords.edges;
        console.log(`records: `, records);
        records.forEach(node => {
          console.log(`createPages node: `, node);
          const path = `records/` + node.record.slug;
          console.log(`createPages path: `, path);
          createPage({
            path,
            component: recordDetailPageTemplate,
            context: {
              slug: node.record.slug
            }
          });
        });

        const reviews = result.data.allReviews.edges;
        console.log(`reviews: `, reviews);
        reviews.forEach(node => {
          console.log(`createPages node: `, node);
          const path = `reviews/` + node.review.slug;
          console.log(`createPages path: `, path);
          createPage({
            path,
            component: reviewDetailPageTemplate,
            context: {
              slug: node.review.slug
            }
          });
        });
      })
    );
  });
};

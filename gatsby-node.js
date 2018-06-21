const path = require(`path`);
const queryAll = require(`./gatsby/queryAll.js`);

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  if (node.internal.type === `Review`) {
    createNode({
      id: `md-${node.id}`,
      parent: node.id,
      children: [],
      internal: {
        type: `${node.internal.type}Markdown`,
        mediaType: `text/markdown`,
        content: node.review,
        contentDigest: node.internal.contentDigest
      }
    });
  }
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

        const artists = result.data.allArtist.edges;
        artists.forEach(({ artist }) => {
          const path = `artists/` + artist.slug;
          createPage({
            path,
            component: artistDetailPageTemplate,
            context: {
              id: node.artist.id
            }
          });
        });

        const records = result.data.allRecord.edges;
        records.forEach(({ record }) => {
          const path = `records/` + record.slug;
          createPage({
            path,
            component: recordDetailPageTemplate,
            context: {
              id: node.record.id
            }
          });
        });

        const reviews = result.data.allReview.edges;
        reviews.forEach(({ review }) => {
          const path = `reviews/` + review.slug;
          createPage({
            path,
            component: reviewDetailPageTemplate,
            context: {
              id: node.review.id,
              mdid: `md-` + node.review.id
            }
          });
        });
      })
    );
  });
};

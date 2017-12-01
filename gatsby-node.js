// we create markdown nodes here so transformer-remark can process them
exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNode } = boundActionCreators
  if (node.internal.type === `Reviews`) {
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
    })
  }
}
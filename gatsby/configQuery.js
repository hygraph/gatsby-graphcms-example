module.exports = `{
  allArtists {
    id
    slug
    name
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
  allRecords(orderBy: createdAt_DESC) {
    id
    slug
    title
    artist {
      id
      slug
      name
    }
    createdAt
    tracks {
      id
      title
      aliasedLength: length
    }
    cover {
      handle
    }
    reviews {
      id
      slug
      title
    }
  }
  allReviews(orderBy: createdAt_DESC) {
    id
    slug
    createdAt
    record {
      slug
      title
      artist {
        slug
        name
      }
    }
    title
    review
    rating
    comments {
      body
    }
  }
}`

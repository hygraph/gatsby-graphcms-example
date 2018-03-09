'use strict'

module.exports = `
  {
<<<<<<< HEAD
    allArtists {
=======
    allArtist {
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
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
<<<<<<< HEAD
    allRecords {
=======
    allRecord {
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
      edges {
        record: node {
          id
          slug
          title
          artist {
            id
            slug
            name
          }
          tracks {
            id
            title
            aliasedLength
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
      }
    }
<<<<<<< HEAD
    allReviews {
=======
    allReview {
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
      edges {
        review: node {
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
      }
    }
  }
`

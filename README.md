# gatsby-graphcms-example

Example of [@GraphCMS/gatsby-source-graphcms](https://github.com/GraphCMS/gatsby-source-graphcms)

## Install

1. `git clone https://github.com/GraphCMS/gatsby-graphcms-example.git && cd gatsby-graphcms-example/`
1. `yarn && yarn develop`

## Graph<em>i</em>QL

For an kitchen sink Graph<em>i</em>QL query you can run on Gatsby’s
graphql debugger at <http://localhost:8000/___graphql>, try this
link to preload with `gatsby develop` running:

[Preload kitchen sink Graph<em>i</em>QL query](http://localhost:8000/___graphql?query=%7B%0A%20%20allArtist%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20artist%3A%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20picture%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20handle%0A%20%20%20%20%20%20%20%20%20%20width%0A%20%20%20%20%20%20%20%20%20%20height%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20records%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20allRecord%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20record%3A%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20artist%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20tracks%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20aliasedLength%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20cover%20%7B%0A%20%20%20%20%20%20%20%20%20%20handle%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20reviews%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20allReview%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20review%3A%20node%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20%20%20record%20%7B%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20artist%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20review%0A%20%20%20%20%20%20%20%20rating%0A%20%20%20%20%20%20%20%20comments%20%7B%0A%20%20%20%20%20%20%20%20%20%20body%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

It puts this in the console:

```
{
  allArtist {
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
  allRecord {
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
  allReview {
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
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/GraphCMS/gatsby-graphcms-example)

## Contributors

* [@redmega](https://github.com/redmega) Angel Piscola
* [@rafacm](https://github.com/rafacm) Rafael Cordones
* [@hmeissner](https://github.com/hmeissner) Hugo Meissner
* [@rdela](https://github.com/rdela) Ricky de Laveaga

…[and you](https://github.com/GraphCMS/gatsby-source-graphcms/issues)?

## [Current limitations](https://github.com/GraphCMS/gatsby-source-graphcms#current-limitations)

See https://github.com/GraphCMS/gatsby-source-graphcms for more.

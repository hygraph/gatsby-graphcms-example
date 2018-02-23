import React, { Component } from 'react'
import Link from 'gatsby-link'

class ArtistPage extends Component {
  render() {
    const artists = this.props.data.artists.edges

    console.log(`artists: `, artists)

    return (
      <div>
        <section className="artists" style={{ textAlign: `center` }}>
          <h1>Artists</h1>
          <nav>
            <ul
              style={{
                listStyle: `none`,
                margin: `0 0 2rem`,
                display: `flex`,
                flexWrap: `wrap`,
                alignItems: `center`,
                justifyContent: `center`,
                width: `100%`,
              }}
            >
              {artists.map(({ node }, i) => (
                <li
                  key={node.id + `nav`}
                  style={{
                    marginBottom: `0.5rem`,
                    width: `128px`,
                    flexBasis: `128px`,
                  }}
                >
                  <Link
                    to={`/artists/` + node.slug}
                    style={{
                      textDecoration: `none`,
                    }}
                  >
                    <figure>
                      <img
                        src={`https://media.graphcms.com/resize=w:224,h:224,a:top,fit:crop/${
                          node.picture.handle
                        }`}
                        alt={node.name}
                        title={node.name}
                        width="112"
                        style={{
                          marginBottom: `0`,
                          marginTop: `0.125rem`,
                        }}
                      />
                      <figcaption>
                        <h6
                          style={{
                            fontSize: `0.5675rem`,
                            marginBottom: `0.125rem`,
                            marginTop: `0`,
                          }}
                        >
                          {node.name}
                        </h6>
                      </figcaption>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    )
  }
}

export default ArtistPage

export const ArtistPageQuery = graphql`
  query getAllArtists {
    artists: allArtists {
      edges {
        node {
          id
          name
          slug
          picture {
            id
            handle
            width
            height
          }
        }
      }
    }
  }
`

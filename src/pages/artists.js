import React, { Component } from 'react'
import Link from 'gatsby-link'

class ArtistPage extends Component {
  render() {
    const artists = this.props.data.artists.edges

    console.log(`artists: `, artists)

    return (
      <div>
        <section className="artists">
          <p>
            Welcome to your new Gatsby example site using the GraphCMS source
            plugin.
          </p>
          <h2>Artists</h2>
          <nav>
            <ul
              style={{
                listStyle: 'none',
                margin: '0 0 2rem',
              }}
            >
              {artists.map(({ node }, i) => (
                <li key={node.id + `nav`}>
                  <h4>
                    <Link to={`artists/${node.slug}`}>{node.name}</Link>
                  </h4>
                </li>
              ))}
            </ul>
          </nav>

          {artists.map(({ node }, i) => (
            <article key={node.id}>
              <h3 id={node.slug}>{node.name}</h3>
              <figure>
                <img
                  src={`https://media.graphcms.com/resize=w:512,h:512,a:top,fit:crop/${
                    node.picture.handle
                  }`}
                  alt={node.name}
                  title={node.name}
                  width="256"
                />
                <figcaption>
                  <small
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                    }}
                  >
                    <a
                      href={`https://media.graphcms.com/${node.picture.handle}`}
                    >
                      full-size, hi-res photo: ({node.picture.width} W &times;{' '}
                      {node.picture.height} H)
                    </a>
                  </small>
                </figcaption>
              </figure>
              <p>Albums by {node.name}</p>
              <ul
                style={{
                  listStyle: 'none',
                  margin: '0 0 3rem',
                }}
              >
                {node.records.map((record, i) => (
                  <li key={record.id}>
                    <h4>
                      <p>
                        <Link to={`#${record.slug}`}>{record.title}</Link>
                      </p>
                    </h4>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    )
  }
}

export default ArtistPage

export const pageQuery = graphql`
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

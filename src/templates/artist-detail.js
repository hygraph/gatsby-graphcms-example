import React from "react"
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'

const propTypes = {
    data: PropTypes.object.isRequired,
}

class ArtistDetailTemplate extends React.Component {
    render() {
        const artist = this.props.data.artists
        return(
            <div>
                <h1 id={artist.slug}>{artist.name}</h1>
                    <figure>
                        <img
                            src={`https://media.graphcms.com/resize=w:512,h:512,a:top,fit:crop/${
                                artist.picture.handle
                                }`}
                            alt={artist.name}
                            title={artist.name}
                            width="256"
                        />
                        <figcaption>
                            <small>
                                <a href={`https://media.graphcms.com/${artist.picture.handle}`}>
                                    full-size, hi-res photo: ({artist.picture.width} W &times;{' '}
                                    {artist.picture.height} H)
                                </a>
                            </small>
                        </figcaption>
                    </figure>
                <h2>Records</h2>
                { artist.records.map((record, i) => (
                    <h3 key={record.id}><Link to={`#${record.slug}`}>{record.title}</Link></h3>
                ))}
                <Link to="/artists">All Artists</Link>
            </div>
        )
    }
}

ArtistDetailTemplate.propTypes = propTypes

export default ArtistDetailTemplate

export const pageQuery = graphql`
    query getArtistById($slug: String!) {
      artists(slug: { eq: $slug }) {
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
    }
`

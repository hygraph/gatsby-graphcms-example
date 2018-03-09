import React, { Component } from "react";
import Link from "gatsby-link";
import StarRatingComponent from "react-star-rating-component";

class ReviewPage extends Component {
  render() {
    const reviews = this.props.data.reviews.edges;

    console.log(`reviews: `, reviews);

    return (
      <div>
        <section className="reviews" style={{ textAlign: `center` }}>
          <h1>Reviews</h1>
          <nav>
            <ul
              style={{ listStyle: `none`, margin: `0 0 2rem`, width: `100%` }}
            >
              {reviews.map(({ node }, i) => (
                <li
                  key={node.id + `nav`}
                  style={{
                    marginBottom: `2rem`
                  }}
                >
                  <h3
                    style={{
                      marginBottom: `0.125rem`,
                      marginTop: `0`
                    }}
                  >
                    <Link
                      to={`/reviews/` + node.slug}
                      style={{
                        textDecoration: `none`
                      }}
                    >
                      {node.title}
                    </Link>
                  </h3>

                  <p>
                    for{" "}
                    <Link to={`/records/${node.record.slug}`}>
                      <em>{node.record.title}</em>
                    </Link>
                    {` `}
                    by{` `}
                    <Link to={`/artists/${node.record.artist.slug}`}>
                      <strong>{node.record.artist.name}</strong>
                    </Link>
                  </p>
                  {node.rating && (
                    <div
                      className="star-wrapper small"
                      style={{ fontSize: `0.5rem`, marginBottom: `2rem` }}
                    >
                      <StarRatingComponent
                        name="Rating"
                        className="rating"
                        starCount={5}
                        value={node.rating}
                        editing={false}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    );
  }
}

export default ReviewPage;

export const ReviewPageQuery = graphql`
  query getAllReviews {
    reviews: allReview {
      edges {
        node {
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
          rating
        }
      }
    }
  }
`;

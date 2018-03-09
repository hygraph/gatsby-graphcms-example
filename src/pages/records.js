<<<<<<< HEAD
import React, { Component } from 'react'
import Link from 'gatsby-link'

class RecordPage extends Component {
  render() {
    const records = this.props.data.records.edges

    console.log(`records: `, records)
=======
import React, { Component } from "react";
import Link from "gatsby-link";

class RecordPage extends Component {
  render() {
    const records = this.props.data.records.edges;

    console.log(`records: `, records);
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin

    return (
      <div>
        <section className="records" style={{ textAlign: `center` }}>
          <h1>Records</h1>
          <nav>
            <ul
              style={{
                listStyle: `none`,
                margin: `0 0 2rem`,
                display: `flex`,
                flexWrap: `wrap`,
                alignItems: `center`,
                justifyContent: `center`,
<<<<<<< HEAD
                width: `100%`,
=======
                width: `100%`
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
              }}
            >
              {records.map(({ node }, i) => (
                <li
                  key={node.id + `nav`}
                  style={{
                    marginBottom: `0.5rem`,
                    width: `128px`,
<<<<<<< HEAD
                    flexBasis: `128px`,
=======
                    flexBasis: `128px`
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
                  }}
                >
                  <Link
                    to={`/records/` + node.slug}
                    style={{
<<<<<<< HEAD
                      textDecoration: `none`,
=======
                      textDecoration: `none`
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
                    }}
                  >
                    <figure>
                      <img
                        src={`https://media.graphcms.com/resize=w:224,h:224,a:top,fit:crop/${
                          node.cover.handle
                        }`}
                        alt={node.title}
                        title={node.title}
                        width="112"
                        style={{
                          marginBottom: `0`,
<<<<<<< HEAD
                          marginTop: `0.125rem`,
=======
                          marginTop: `0.125rem`
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
                        }}
                      />
                      <figcaption>
                        <h6
                          style={{
                            marginBottom: `0.125rem`,
                            marginTop: `0`,
<<<<<<< HEAD
                            fontSize: `0.5675rem`,
=======
                            fontSize: `0.5675rem`
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
                          }}
                        >
                          {node.title}
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
<<<<<<< HEAD
    )
  }
}

export default RecordPage

export const RecordPageQuery = graphql`
  query getAllRecords {
    records: allRecords {
=======
    );
  }
}

export default RecordPage;

export const RecordPageQuery = graphql`
  query getAllRecords {
    records: allRecord {
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin
      edges {
        node {
          id
          slug
          title
          artist {
            id
            slug
            name
          }
          cover {
            handle
          }
        }
      }
    }
  }
<<<<<<< HEAD
`
=======
`;
>>>>>>> upstream/feature/use-@next-graphcms-source-plugin

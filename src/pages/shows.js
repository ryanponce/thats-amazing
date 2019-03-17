import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ShowsPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <h1>Shows</h1>

    <ul>
      {data.allAirtable.edges.map(show => (
        <li key={show.node.recordId}>
          <Link to={`/shows/${show.node.data.slug}`}>
            {show.node.data.name}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export const query = graphql`
  query ShowsPageQuery {
    allAirtable(filter: { table: { eq: "Shows" } }) {
      edges {
        node {
          recordId
          data {
            name
            slug
          }
        }
      }
    }
  }
`;

export default ShowsPage;

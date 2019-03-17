import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Howdy!</h1>

    <div>
      {data.allAirtable.edges.map(episode => (
        <div key={episode.node.recordId}>{episode.node.data.title}</div>
      ))}
    </div>

    <div style={{position: "relative", paddingTop: "56.25%"}}>
    <iframe src="https://vhost1.chapman.edu/player/embed_player.php?vid=1154" frameborder="0" allowfullscreen style={{position: "absolute", top:0, left:0, width:"100%", height:"100%"}}></iframe>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export const query = graphql`
  query HomePageQuery {
    allAirtable {
      edges {
        node {
          recordId
          data {
            title
            video_url
          }
        }
      }
    }
  }
`;

export default IndexPage;

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ShowPage = ({ pageContext }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <h1>{pageContext.show.node.data.name}</h1>

    {pageContext.show.node.data.episodes ? (
      <ul>
        {pageContext.show.node.data.episodes.map(episode => (
          <li key={episode.recordId}>{episode.data.title}</li>
        ))}
      </ul>
    ) : (
      <p>Whoops! It looks like there are no episodes for this show.</p>
    )}
  </Layout>
);

export default ShowPage;

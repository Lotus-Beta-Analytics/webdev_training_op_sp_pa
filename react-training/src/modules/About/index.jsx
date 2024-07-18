import React from "react";
import Layout from "../../components/Layout";

const About = () => {
  return (
    <div>
      <Layout>
        <h2>About Page</h2>
      </Layout>
      <hr />
      <Layout children={<h2>About Page</h2>} />
    </div>
  );
};

export default About;

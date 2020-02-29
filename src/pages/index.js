import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label htmlFor="launch_notification">
          <input type="checkbox" id="launch_notification" />
          Notify me when the site launches
        </label>
      </p>
      <p>
        <label htmlFor="beta_access">
          <input type="checkbox" id="beta_access" />I want to be part of the
          Beta team and have early-access to the preview
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default IndexPage

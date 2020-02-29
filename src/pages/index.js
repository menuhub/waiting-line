import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <form
      name="waiting-line"
      method="POST"
      data-netlify="true"
      action="/waiting-line"
      enctype="multipart/form-data"
    >
      <p>
        <label>
          Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label htmlFor="launch_notification">
          <input type="checkbox" name="launch_notification" />
          Notify me when the site launches
        </label>
      </p>
      <p>
        <label htmlFor="beta_access">
          <input type="checkbox" name="beta_access" />I want to be part of the
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

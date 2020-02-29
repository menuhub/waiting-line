import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <form
      name="beta"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form-name" value="beta" />
      <p>
        <label>
          Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label htmlFor="launch_notification">
          <input
            type="checkbox"
            name="launch_notification"
            id="launch_notification"
          />
          Notify me when the site launches
        </label>
      </p>
      <p>
        <label htmlFor="beta_access">
          <input type="checkbox" name="beta_access" id="beta_access" />I want to
          be part of the Beta team and have early-access to the preview
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default IndexPage

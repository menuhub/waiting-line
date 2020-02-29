import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <form name="beta" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="beta" />
      <p>
        <label>
          Email: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <input type="checkbox" id="notification" name="notify" />
        <label htmlFor="notification">Notify me when site launches.</label>
      </p>
      <p>
        <input type="checkbox" id="earlyAccess" name="invite" />
        <label htmlFor="earlyAccess">
          I want to have early access to the preview.
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default IndexPage

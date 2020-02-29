import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Email: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default IndexPage

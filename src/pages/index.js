import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <div>
        <div>
          <WelcomeMessage title={title} description={description} />
        </div>
        <div>
          <BetaForm />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const WelcomeMessage = ({ title, description }) => (
  <>
    <p>
      You have reached the homepage of <strong>{title}</strong>, {description}.
    </p>
    <p>
      If you want to be notified when the project launches, or get early-access
      to the preview, use the form.
    </p>
  </>
)

const BetaForm = () => (
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
)

export default IndexPage

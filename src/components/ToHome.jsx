import React from "react"
import PropTypes from "prop-types"

import { navigate } from "gatsby"

import { P } from "./EasyText"
import Link from "./Link"

import BackIcon from "mdi-react/NavigateBeforeIcon"

export default function GoBack({ oneUpUrl }) {
  return (
    <P
      paragraph
      component={Link}
      to=""
      onClick={e => {
        if (window.history.state) {
          window.history.back()
          e.preventDefault()
        } else if (document.referrer === "" && oneUpUrl) {
          navigate(oneUpUrl)
          e.preventDefault()
        }
      }}
      style={{ display: "flex", alignItems: "center" }}
    >
      <BackIcon /> Back
    </P>
  )
}

GoBack.propTypes = {
  oneUpUrl: PropTypes.string.isRequired,
}

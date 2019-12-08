import React from "react"

import { useTheme } from "@material-ui/core"
import { H1, P } from "./EasyText"
import Link from "./Link"

import BackIcon from "mdi-react/NavigateBeforeIcon"

export default function GoBack() {
  const theme = useTheme()

  return (
    <P
      paragraph
      component={Link}
      to=""
      onClick={e => {
        window.history.back()
        e.preventDefault()
      }}
      style={{ display: "flex", alignItems: "center" }}
    >
      <BackIcon /> Back
    </P>
  )
}

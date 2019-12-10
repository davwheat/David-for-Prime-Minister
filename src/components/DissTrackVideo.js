import React from "react"

import QierPlayer from "qier-player"
import theme from "../constants/theme"
import { P } from "./EasyText"
import Link from "./Link"

export default function DissTrackVideo() {
  return (
    <>
      <QierPlayer
        themeColor={theme.palette.primary.main}
        showVideoQuality
        src480p={require("../images/boris/video/boris-johnson-diss.480.compressed.webm")}
        src720p={require("../images/boris/video/boris-johnson-diss.720.compressed.webm")}
        src1080p={require("../images/boris/video/boris-johnson-diss.1080.compressed.webm")}
        srcOrigin={require("../images/boris/video/boris-johnson-diss.1080.compressed.mp4")}
      />
      <br />
      <P paragraph>
        If the video won't play, click{" "}
        <Link
          to={require("../images/boris/video/boris-johnson-diss.1080.compressed.mp4")}
        >
          this link
        </Link>
        .
      </P>
    </>
  )
}

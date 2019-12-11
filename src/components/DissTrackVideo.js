import React from "react"

// import QierPlayer from "qier-player"
import theme from "../constants/theme"
import { P } from "./EasyText"
import Link from "./Link"

export default function DissTrackVideo() {
  return (
    <>
      {/* <QierPlayer
        themeColor={theme.palette.primary.main}
        showVideoQuality
        src480p={require("../images/boris/video/boris-johnson-diss.480.compressed.webm")}
        src720p={require("../images/boris/video/boris-johnson-diss.720.compressed.webm")}
        src1080p={require("../images/boris/video/boris-johnson-diss.1080.compressed.webm")}
        srcOrigin={require("../images/boris/video/boris-johnson-diss.1080.compressed.mp4")}
      /> */}
      <video
        controls
        disablePictureInPicture
        draggable="false"
        poster={require("../images/boris/boris-thumbs-up.jpg")}
        style={{ display: "block", width: "100%" }}
        autobuffer
        playsInline
        preload="auto"
      >
        <source
          src={require("../images/boris/video/boris-johnson-diss.1080.compressed.mp4")}
          type="video/mp4"
          media="all and (min-width: 1200px)"
        />
        <source
          src={require("../images/boris/video/boris-johnson-diss.1080.compressed.webm")}
          type="video/webm"
          media="all and (min-width: 1200px)"
        />
        <source
          src={require("../images/boris/video/boris-johnson-diss.480.compressed.mp4")}
          type="video/mp4"
          media="all and (max-width: 600px)"
        />
        <source
          src={require("../images/boris/video/boris-johnson-diss.480.compressed.webm")}
          type="video/webm"
          media="all and (max-width: 600px)"
        />
        <source
          src={require("../images/boris/video/boris-johnson-diss.720.compressed.mp4")}
          type="video/mp4"
        />
        <source
          src={require("../images/boris/video/boris-johnson-diss.720.compressed.webm")}
          type="video/webm"
        />
      </video>
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

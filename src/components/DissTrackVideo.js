import React from 'react'

import { P } from './EasyText'
import Link from './Link'

import diss1080mp4 from '../images/boris/video/boris-johnson-diss.1080.compressed.mp4'
import diss1080webm from '../images/boris/video/boris-johnson-diss.1080.compressed.webm'
import diss720mp4 from '../images/boris/video/boris-johnson-diss.720.compressed.mp4'
import diss720webm from '../images/boris/video/boris-johnson-diss.720.compressed.webm'
import diss480mp4 from '../images/boris/video/boris-johnson-diss.480.compressed.mp4'
import diss480webm from '../images/boris/video/boris-johnson-diss.480.compressed.webm'

import thumb from '../images/boris/boris-thumbs-up.jpg'

export default function DissTrackVideo() {
  return (
    <>
      <video
        controls
        disablePictureInPicture
        draggable="false"
        poster={thumb}
        style={{ display: 'block', width: '100%' }}
        autobuffer
        playsInline
        preload="auto"
      >
        <source src={diss1080mp4} type="video/mp4" media="all and (min-width: 1200px)" />
        <source src={diss1080webm} type="video/webm" media="all and (min-width: 1200px)" />
        <source src={diss480mp4} type="video/mp4" media="all and (max-width: 600px)" />
        <source src={diss480webm} type="video/webm" media="all and (max-width: 600px)" />
        <source src={diss720mp4} type="video/mp4" />
        <source src={diss720webm} type="video/webm" />
      </video>
      <br />
      <P paragraph>
        If the video won't play, click <Link to={diss1080mp4}>this link</Link>.
      </P>
    </>
  )
}

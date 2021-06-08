import React, { useEffect } from 'react'
import { useController } from 'react-scroll-parallax'

export default function ParallaxUpdater() {
  try {
    const { parallaxController } = useController()
    useEffect(() => {
      window.requestAnimationFrame(() => {
        parallaxController.update()
      })
    })
  } catch {}
  return <></>
}

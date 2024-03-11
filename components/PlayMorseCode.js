'use client'

import { useEffect, useState } from 'react'

const useAudio = url => {
  const [audio, setAudio] = useState(null)
  const [playing, setPlaying] = useState(false)

  const play = () => setPlaying(!playing)

  useEffect(() => {
    if (audio === null && playing) {
      let a = new Audio(url)
      setAudio(a)
      a.play()
    } else if (audio !== null && playing) {
      audio.play()
    }
  }, [playing])

  useEffect(() => {
    if (audio === null) return
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [audio])

  return [playing, play]
}

export default function PlayMorseCode ({ text, symbol }) {
  const [playing, play] = useAudio('/sounds/morse/' + symbol.toLowerCase() + '.mp3')

  return (
    <a href="#" onClick={(e) => {
      e.preventDefault()
      play()
    }} title="Play morse code audio">
      {text}
    </a>
  )
}

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
    } else if (audio !== null) {
      if(playing) {
        audio.play()
      } else {
        audio.pause()
        audio.currentTime = 0;
      }
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

export default function PlayCodeWord ({ symbol }) {
  const [playing, toggle] = useAudio('/sounds/words/' + symbol.toLowerCase() + '.mp3')

  return (
    <a href="#" onClick={(e) => {
      e.preventDefault()
      toggle()
    }} title="Play code word audio"
    className="block w-2 p-1 text-center text-gray-500">
      {playing ? '⏸︎':'⏵︎'}
    </a>
  )
}

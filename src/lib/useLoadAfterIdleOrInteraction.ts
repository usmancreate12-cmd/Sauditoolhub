'use client'

import { useEffect, useRef } from 'react'

export function useLoadAfterIdleOrInteraction(callback: () => void, delayMs = 4000) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    let done = false
    let idleHandle: number | null = null
    let timer: ReturnType<typeof setTimeout> | null = null

    const load = () => {
      if (done) return
      done = true
      cleanup()
      callbackRef.current()
    }

    const events = ['scroll', 'click', 'touchstart', 'keydown'] as const

    const onInteraction = () => load()
    for (const event of events) {
      window.addEventListener(event, onInteraction, { once: true, passive: true })
    }

    function cleanup() {
      for (const event of events) {
        window.removeEventListener(event, onInteraction)
      }
      if (idleHandle !== null && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleHandle)
      }
      if (timer !== null) clearTimeout(timer)
    }

    if ('requestIdleCallback' in window) {
      idleHandle = window.requestIdleCallback(load, { timeout: delayMs })
    } else {
      timer = setTimeout(load, delayMs)
    }

    return cleanup
  }, [delayMs])
}

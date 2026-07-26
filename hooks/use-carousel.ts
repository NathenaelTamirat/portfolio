'use client'

import { useCallback, useState } from 'react'

export function useCarousel(itemCount: number) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(((index % itemCount) + itemCount) % itemCount)
    },
    [itemCount],
  )

  const previous = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo])
  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo])

  return { currentIndex, goTo, next, previous }
}

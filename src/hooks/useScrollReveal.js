import { useEffect, useRef } from 'react'

/**
 * Adds 'is-visible' class to ref element when it enters the viewport.
 * @param {number} threshold - Intersection ratio to trigger reveal
 * @returns {React.RefObject}
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

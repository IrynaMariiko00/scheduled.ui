import { useEffect, useRef, type RefObject } from 'react'

type RefTarget = RefObject<HTMLElement | null>

function isOutside(refs: RefTarget[], target: Node) {
  return refs.every((ref) => !ref.current?.contains(target))
}

export function useClickOutside(
  refs: RefTarget | RefTarget[],
  onOutside: () => void,
  enabled = true,
) {
  const onOutsideRef = useRef(onOutside)
  onOutsideRef.current = onOutside

  const refsRef = useRef(refs)
  refsRef.current = refs

  useEffect(() => {
    if (!enabled) return

    const handleClickOutside = (event: MouseEvent) => {
      const targets = Array.isArray(refsRef.current) ? refsRef.current : [refsRef.current]

      if (isOutside(targets, event.target as Node)) {
        onOutsideRef.current()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [enabled])
}

import { X } from 'lucide-react'
import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '~/lib/cn'

type ModalLayoutProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
  panelClassName?: string
  closeLabel?: string
  showCloseButton?: boolean
  labelledBy?: string
  describedBy?: string
}

export const ModalLayout = ({
  open,
  onClose,
  children,
  panelClassName,
  closeLabel = 'Закрити',
  showCloseButton = true,
  labelledBy,
  describedBy,
}: ModalLayoutProps) => {
  useEffect(() => {
    if (!open) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div className="relative w-full max-w-md" onClick={(event) => event.stopPropagation()}>
        {showCloseButton && (
          <button
            type="button"
            aria-label={closeLabel}
            onClick={onClose}
            className="absolute -right-10 -top-5 inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
          aria-describedby={describedBy}
          className={cn(
            'rounded-xl border border-border bg-bg-surface px-6 py-8 shadow-lg',
            panelClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body,
  )
}

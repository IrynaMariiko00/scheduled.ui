import { cn } from '~/lib/cn'
import { ModalLayout } from '~/components/ui/ModalLayout'

type ConfirmModalProps = {
  open: boolean
  title: string
  description: string
  confirmText?: string
  cancelText?: string
  variant?: 'default' | 'danger'
  onConfirm: () => void
  onClose: () => void
}

const TITLE_ID = 'confirm-modal-title'
const DESCRIPTION_ID = 'confirm-modal-description'

export const ConfirmModal = ({
  open,
  title,
  description,
  confirmText = 'Підтвердити',
  cancelText = 'Скасувати',
  variant = 'default',
  onConfirm,
  onClose,
}: ConfirmModalProps) => {
  return (
    <ModalLayout
      open={open}
      onClose={onClose}
      labelledBy={TITLE_ID}
      describedBy={DESCRIPTION_ID}
      panelClassName="flex min-h-[12rem] flex-col justify-between"
    >
      <div className="text-center">
        <h2 id={TITLE_ID} className="text-lg font-semibold text-text">
          {title}
        </h2>
        <p id={DESCRIPTION_ID} className="mt-3 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>

      <div className="mx-auto mt-8 grid w-full max-w-[14rem] grid-cols-2 gap-3">
        <button type="button" onClick={onClose} className="btn--secondary w-full">
          {cancelText}
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className={cn('w-full', variant === 'danger' ? 'btn--danger' : 'btn--primary')}
        >
          {confirmText}
        </button>
      </div>
    </ModalLayout>
  )
}

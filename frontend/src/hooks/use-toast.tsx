import { toast as sonnerToast } from "sonner"

interface ToastProps {
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function toast(props: ToastProps) {
  const { title, description, action } = props

  return sonnerToast(title, {
    description,
    action: action
      ? {
          label: action.label,
          onClick: action.onClick,
        }
      : undefined,
  })
}

export { toast as useToast }
import { createContext } from "react"

export type ModalOptions = {
  component?: JSX.Element
  width?: string
  closeOnEsc?: boolean
  closeOnOutsideClick?: boolean
  onClose?: () => void
  hideCloseBtn?: boolean
  overlayClassName?: string
  modalClassName?: string
  containerClassName?: string
}

export type ModalContextType = {
  open(options?: ModalOptions): void
  close(): void
  setOptions(options: ModalOptions): void
}

export const ModalContext = createContext<ModalContextType>({
  open() {},
  close() {},
  setOptions() {},
})

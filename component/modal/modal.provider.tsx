import { ReactNode, useCallback, useState } from "react"
import { ModalContext, ModalOptions } from "./modal.context"
import { Modal } from "./modal.component"
import { ModalContextType } from "."

export function ModalProvider(props: { children: ReactNode }) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const [isRendered, setRendered] = useState<boolean>(false)
  const [isOpened, setOpened] = useState<boolean>(false)
  const [options, setOptions] = useState<ModalOptions>({})

  // ---------------------------------------------------------------------------
  // memo callbacks
  // ---------------------------------------------------------------------------

  const openFn = useCallback((options?: ModalOptions) => {
    setRendered(true)
    setTimeout(() => {
      setOpened(true)
      if (options) setOptions(options)
    })
  }, [])

  const closeFn = useCallback(() => {
    setRendered(false)
    setTimeout(() => {
      setOpened(false)
      setOptions({})
      if (options.onClose) {
        options.onClose()
      }
    }, 300)
  }, [])

  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const [value] = useState<ModalContextType>({
    open: openFn,
    close: closeFn,
    setOptions,
  })

  // ---------------------------------------------------------------------------
  return (
    <ModalContext.Provider value={value}>
      {isRendered && (
        <Modal
          isOpened={isOpened}
          close={closeFn}
          options={options}
          style={{ visibility: isRendered ? "visible" : "hidden" }}
        />
      )}
      {props.children}
    </ModalContext.Provider>
  )
}

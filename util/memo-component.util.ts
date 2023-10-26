import {
  FunctionComponent,
  memo,
  NamedExoticComponent,
  PropsWithChildren,
} from "react"

export function memoComponent<P extends object>(
  name: string,
  Component: FunctionComponent<P>,
  propsAreEqual?: (
    prevProps: Readonly<PropsWithChildren<P>>,
    nextProps: Readonly<PropsWithChildren<P>>,
  ) => boolean,
): NamedExoticComponent<P> {
  const memoComponent = memo(Component, propsAreEqual)
  memoComponent.displayName = name
  return memoComponent
}

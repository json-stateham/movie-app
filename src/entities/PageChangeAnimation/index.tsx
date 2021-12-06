import { FC, ReactNode } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

interface IProps {
  mode?: 'out-in' | 'in-out'
  classNames: string
  keyProp: number | string
  timeout: number
  children: ReactNode
}

const PageChangeAnimation: FC<IProps> = ({
  children,
  classNames,
  keyProp,
  mode = 'out-in',
  timeout,
}) => (
  <SwitchTransition mode={mode}>
    <CSSTransition
      key={keyProp}
      onExited={() =>
        setTimeout(
          () =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            }),
          420,
        )
      }
      timeout={timeout}
      classNames={classNames}
    >
      {children}
    </CSSTransition>
  </SwitchTransition>
)

export { PageChangeAnimation }

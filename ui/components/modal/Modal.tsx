import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useClickOutside } from '@/lib/hooks/useClickOutside';
import { useEscapeKey } from '@/lib/hooks/useEscapeKey';
import cx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  handleOpen: () => void;
}

export const Modal = ({ children, className, isOpen, handleOpen }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEscapeKey({ callback: handleOpen });
  useClickOutside({ ref: modalRef, callback: handleOpen });

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modalWrapper}>
      <div className={cx(styles.modalContent, className)} ref={modalRef}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

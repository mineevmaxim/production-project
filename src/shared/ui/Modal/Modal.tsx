import { classNames } from 'shared/lib/classNames/classNames';
import React, { ReactNode } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen = false,
        onClose,
    } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div
                    className={cls.content}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

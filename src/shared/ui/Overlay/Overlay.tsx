import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
    const {
        className,
        onClick,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Overlay, {}, [className])} onClick={onClick} />
    );
});

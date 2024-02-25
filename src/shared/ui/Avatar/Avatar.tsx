import React, { CSSProperties, memo, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
	src?: string;
	size?: number;
	alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt,
    } = props;

    const mods: Mods = {

    };

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            className={classNames(cls.Avatar, {}, [className])}
            alt={alt}
        />
    );
});

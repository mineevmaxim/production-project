import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
	className?: string;
}

export const Icon = memo(({ Svg, className }: IconProps) => (
    <Svg className={classNames(cls.Icon, {}, [className])} />
));

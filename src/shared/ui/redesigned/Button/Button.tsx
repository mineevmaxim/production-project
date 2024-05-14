import React, {
	ButtonHTMLAttributes,
	memo,
	ReactElement,
	ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	/**
	 * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
	 */
	variant?: ButtonVariant;
	/**
	 * Флаг, делающий кнопку квадратной
	 */
	square?: boolean;
	/**
	 * Размер кнопки в соответствии с дизайн системой
	 */
	size?: ButtonSize;
	/**
	 * Флаг, отвечающий за работу кнопки
	 */
	disabled?: boolean;
	/**
	 * Содержимое кнопки
	 */
	children?: ReactNode;
	/**
	 * Увеличивает кнопку на всю свободную ширину
	 */
	fullWidth?: boolean;
	addonLeft?: ReactElement;
	addonRight?: ReactElement;
	color?: ButtonColor;
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		variant = 'outline',
		square,
		disabled,
		fullWidth,
		size = 'm',
		color = 'normal',
		addonLeft,
		addonRight,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
		[cls.withAddonLeft]: Boolean(addonLeft),
		[cls.withAddonRight]: Boolean(addonRight),
	};

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [
				className,
				cls[variant],
				cls[size],
				cls[color],
			])}
			disabled={disabled}
			{...otherProps}
		>
			<div className={cls.addonLeft}>{addonLeft}</div>
			{children}
			<div className={cls.addonRight}>{addonRight}</div>
		</button>
	);
});

import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	variant?: TextVariant;
	align?: TextAlign;
	size?: TextSize;
	bold?: boolean;

	'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
	s: 'h3',
	m: 'h2',
	l: 'h1',
};

export const Text = memo((props: TextProps) => {
	const {
		className,
		text,
		title,
		variant = 'primary',
		align = 'left',
		size = 'm',
		bold,
		'data-testid': dataTestId = 'Text',
	} = props;

	const HeaderTag = mapSizeToHeaderTag[size];

	return (
		<div
			className={classNames(cls.Text, { [cls.bold]: bold }, [
				className,
				cls[variant],
				cls[align],
				cls[size],
			])}
		>
			{title && (
				<HeaderTag
					className={cls.title}
					data-testid={`${dataTestId}.Header`}
				>
					{title}
				</HeaderTag>
			)}
			{text && (
				<p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
					{text}
				</p>
			)}
		</div>
	);
});

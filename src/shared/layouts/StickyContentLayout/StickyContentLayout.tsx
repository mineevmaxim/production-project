import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
	className?: string;
	left?: ReactElement;
	content: ReactElement;
	right?: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
	const { className, left, right, content } = props;

	return (
		<div className={classNames(cls.StickyContentLayout, {}, [className])}>
			{left && <section className={cls.left}>{left}</section>}
			<section className={cls.content}>{content}</section>
			{right && <section className={cls.right}>{right}</section>}
		</div>
	);
});

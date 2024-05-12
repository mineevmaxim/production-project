import { memo, ReactElement } from 'react';
import cls from './MainLayout.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface MainLayoutProps {
	className?: string;
	header: ReactElement;
	content: ReactElement;
	sidebar: ReactElement;
	toolbar?: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
	const { className, header, content, toolbar, sidebar } = props;

	return (
		<div className={classNames(cls.MainLayout, {}, [className])}>
			<aside className={cls.sidebar}>{sidebar}</aside>
			<main className={cls.content}>{content}</main>
			<div className={cls.rightbar}>
				<header className={cls.header}>{header}</header>
				<aside className={cls.toolbar}>{toolbar}</aside>
			</div>
		</div>
	);
});

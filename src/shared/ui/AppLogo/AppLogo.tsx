import { memo } from 'react';
import cls from './AppLogo.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import { HStack } from '../Stack';

interface AppLogoProps {
	className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
	const { className } = props;

	return (
		<HStack
			max
			justify="center"
			className={classNames(cls.appLogoWrapper, {}, [className])}
		>
			<div className={cls.gradientBig} />
			<div className={cls.gradientSmall} />
			<AppSvg className={cls.AppLogo} />
		</HStack>
	);
});

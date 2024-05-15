import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowTopIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
	className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
	const { className } = props;

	const onClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Icon
			Svg={ArrowTopIcon}
			className={classNames(cls.ScrollToTopButton, {}, [className])}
			clickable
			onClick={onClick}
		/>
	);
});

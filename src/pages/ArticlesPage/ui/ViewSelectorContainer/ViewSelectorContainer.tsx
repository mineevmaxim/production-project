import { memo } from 'react';
import cls from './ViewSelectorContainer.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
	className?: string;
}

export const ViewSelectorContainer = memo(
	(props: ViewSelectorContainerProps) => {
		const { className } = props;
		const dispatch = useAppDispatch();

		const { view, onChangeView } = useArticleFilters();

		return (
			<div
				className={classNames(cls.ViewSelectorContainer, {}, [
					className,
				])}
			>
				<ArticleViewSelector view={view} onViewClick={onChangeView} />
			</div>
		);
	},
);

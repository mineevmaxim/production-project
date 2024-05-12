import { memo } from 'react';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';

interface FiltersContainerProps {
	className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
	const { className } = props;
	const {
		onChangeSearch,
		search,
		onChangeType,
		type,
		onChangeSort,
		sort,
		onChangeOrder,
		order,
	} = useArticleFilters();

	return (
		<ArticlesFilters
			sort={sort}
			order={order}
			type={type}
			search={search}
			onChangeSearch={onChangeSearch}
			onChangeOrder={onChangeOrder}
			onChangeSort={onChangeSort}
			onChangeType={onChangeType}
		/>
	);
});

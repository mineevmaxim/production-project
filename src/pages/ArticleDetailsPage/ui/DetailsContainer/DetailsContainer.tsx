import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
	className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
	const { className } = props;
	const { id } = useParams<{ id: string }>();

	if (!id) {
		return null;
	}

	return (
		<Card max padding="24" className={className}>
			<ArticleDetails id={id} />
		</Card>
	);
});

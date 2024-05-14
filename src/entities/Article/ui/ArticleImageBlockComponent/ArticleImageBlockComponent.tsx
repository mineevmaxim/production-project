import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticleImageBlockComponentProps {
	className?: string;
	block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
	(props: ArticleImageBlockComponentProps) => {
		const { className, block } = props;
		const { t } = useTranslation();

		return (
			<div
				className={classNames(cls.ArticleImageBlockComponent, {}, [
					className,
				])}
			>
				<ToggleFeatures
					feature="isAppRedesigned"
					on={
						<AppImage
							className={cls.img}
							alt={block.title}
							src={block.src}
							fallback={<Skeleton width="100%" />}
						/>
					}
					off={
						<img
							src={block.src}
							alt={block.title}
							className={cls.img}
						/>
					}
				/>
				{block.title && (
					<ToggleFeatures
						feature="isAppRedesigned"
						on={<Text text={block.title} align="center" />}
						off={
							<TextDeprecated
								text={block.title}
								align={TextAlign.CENTER}
							/>
						}
					/>
				)}
			</div>
		);
	},
);

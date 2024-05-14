import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	Text as TextDeprecated,
	TextAlign,
	TextSize,
} from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { renderBlock } from './renderBlock';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticleDetailsProps {
	className?: string;
	id?: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
	const article = useSelector(getArticleDetailsData);

	return (
		<>
			<HStack justify="center" max className={cls.avatarWrapper}>
				<AvatarDeprecated
					size={200}
					src={article?.img}
					className={cls.avatar}
				/>
			</HStack>
			<VStack gap="4" max data-testid="ArticleDetails.Info">
				<TextDeprecated
					className={cls.title}
					title={article?.title}
					text={article?.subtitle}
					size={TextSize.L}
				/>
				<HStack gap="8" className={cls.articleInfo}>
					<IconDeprecated className={cls.icon} Svg={EyeIcon} />
					<TextDeprecated text={String(article?.views)} />
				</HStack>
				<HStack gap="8" className={cls.articleInfo}>
					<IconDeprecated className={cls.icon} Svg={CalendarIcon} />
					<TextDeprecated text={article?.createdAt} />
				</HStack>
			</VStack>
			{article?.blocks.map(renderBlock)}
		</>
	);
};

const Redesigned = () => {
	const article = useSelector(getArticleDetailsData);

	return (
		<>
			<Text title={article?.title} size="l" bold />
			<Text title={article?.subtitle} />
			<AppImage
				src={article?.img}
				className={cls.image}
				height={420}
				width="100%"
				fallback={<Skeleton width="100%" height={420} border="16px" />}
			/>
			{article?.blocks.map(renderBlock)}
		</>
	);
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
	const { className, id } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const error = useSelector(getArticleDetailsError);

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchArticleById(id));
		}
	}, [dispatch, id]);

	let content;
	if (isLoading) {
		content = (
			<>
				<SkeletonDeprecated
					className={cls.avatar}
					width={200}
					height={200}
					border="50%"
				/>
				<SkeletonDeprecated
					className={cls.title}
					width={300}
					height={32}
				/>
				<SkeletonDeprecated
					className={cls.skeleton}
					width={600}
					height={24}
				/>
				<SkeletonDeprecated
					className={cls.skeleton}
					width="100%"
					height={200}
				/>
				<SkeletonDeprecated
					className={cls.skeleton}
					width="100%"
					height={200}
				/>
			</>
		);
	} else if (error) {
		content = (
			<TextDeprecated
				align={TextAlign.CENTER}
				title={t('Произошла ошибка при загрузке статьи.')}
			/>
		);
	} else {
		content = (
			<ToggleFeatures
				feature="isAppRedesigned"
				on={<Redesigned />}
				off={<Deprecated />}
			/>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<VStack
				gap="16"
				max
				className={classNames(cls.ArticleDetails, {}, [className])}
			>
				{content}
			</VStack>
		</DynamicModuleLoader>
	);
});

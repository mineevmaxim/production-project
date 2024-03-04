import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetcharticleByid';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { ArticleBLockType, ArticleBlock } from 'entities/Article/model/types/article';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
    id: string;
    className?: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        id,
        className,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBLockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBLockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBLockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    width={200}
                    height={200}
                    borderRadius="50%"
                    className={cls.avatar}
                />
                <Skeleton
                    width={300}
                    height={32}
                    className={cls.title}
                />
                <Skeleton
                    width={600}
                    height={24}
                    className={cls.skeleton}
                />
                <Skeleton
                    width="100%"
                    height={200}
                    className={cls.skeleton}
                />
                <Skeleton
                    width="100%"
                    height={200}
                    className={cls.skeleton}
                />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке статьи.')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

import { ArticleList, ArticleView } from 'entities/Article';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageReducer, getArticles } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    view={view}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
